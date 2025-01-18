'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, Calendar, Car, DollarSign, Palette } from 'lucide-react'

export default function TravelPlanning() {
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { role: 'user', content: inputMessage }])
      // Here you would typically call an API to get the AI response
      // For now, we'll just echo the user's message
      setTimeout(() => {
        setChatMessages(prev => [...prev, { role: 'assistant', content: `You said: ${inputMessage}` }])
      }, 1000)
      setInputMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">旅游规划</h1>
      
      {/* Chat Interface */}
      <Card className="mb-6 p-4">
        <div className="h-64 overflow-y-auto mb-4">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {msg.content}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="输入您的旅游规划问题..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>发送</Button>
        </div>
      </Card>
      
      {/* Travel Planner */}
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4">旅游规划器</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="destination" className="mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              目的地
            </Label>
            <Select>
              <SelectTrigger id="destination">
                <SelectValue placeholder="选择目的地" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="guiyang">贵阳</SelectItem>
                <SelectItem value="zunyi">遵义</SelectItem>
                <SelectItem value="anshun">安顺</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="theme" className="mb-2 flex items-center">
              <Palette className="w-4 h-4 mr-2" />
              游玩主题
            </Label>
            <Select>
              <SelectTrigger id="theme">
                <SelectValue placeholder="选择主题" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="culture">文化体验</SelectItem>
                <SelectItem value="nature">自然风光</SelectItem>
                <SelectItem value="food">美食之旅</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="duration" className="mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              游玩时间
            </Label>
            <Select>
              <SelectTrigger id="duration">
                <SelectValue placeholder="选择时间" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3天</SelectItem>
                <SelectItem value="4-7">4-7天</SelectItem>
                <SelectItem value="7+">7天以上</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="transport" className="mb-2 flex items-center">
              <Car className="w-4 h-4 mr-2" />
              交通方式
            </Label>
            <Select>
              <SelectTrigger id="transport">
                <SelectValue placeholder="选择交通方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">自驾</SelectItem>
                <SelectItem value="public">公共交通</SelectItem>
                <SelectItem value="tour">跟团</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="budget" className="mb-2 flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              预算 (元)
            </Label>
            <Slider
              id="budget"
              min={1000}
              max={10000}
              step={1000}
              defaultValue={[5000]}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1000元</span>
              <span>10000元</span>
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full">生成旅游计划</Button>
      </Card>
    </div>
  )
}

