import { NextResponse } from 'next/server'

const DASHSCOPE_API_KEY = process.env.DASHSCOPE_API_KEY
const API_URL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DASHSCOPE_API_KEY}`,
        'Content-Type': 'application/json',
        'X-DashScope-SSE': 'disable',
      },
      body: JSON.stringify({
        model: 'qwen-turbo',
        input: {
          messages: [
            {
              role: 'system',
              content: '你是一个专业的旅游规划顾问，可以为用户提供详细的旅游建议和规划方案。'
            },
            {
              role: 'user',
              content: message
            }
          ]
        }
      })
    })

    if (!response.ok) {
      throw new Error('API请求失败')
    }

    const data = await response.json()
    
    if (data.output?.text) {
      return NextResponse.json({ message: data.output.text })
    } else {
      throw new Error('无效的API响应')
    }
    
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: '处理请求时发生错误' },
      { status: 500 }
    )
  }
} 