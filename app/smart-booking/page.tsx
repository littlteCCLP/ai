'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function SmartBooking() {
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { role: 'user', content: inputMessage }])
      // Here you would typically call an API to get the AI response
      // For now, we'll just echo the user's message
      setTimeout(() => {
        setChatMessages(prev => [...prev, { role: 'assistant', content: `您说: ${inputMessage}` }])
      }, 1000)
      setInputMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">智能订购</h1>
      
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
            placeholder="订个酒店、找个门票、比个价格..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>发送</Button>
        </div>
      </Card>
      
      {/* Product Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
              <Badge className="absolute top-2 left-2 bg-blue-500">{product.type}</Badge>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{product.rating}</span>
                <span className="mx-2">•</span>
                <MessageCircle className="w-4 h-4 text-gray-400 mr-1" />
                <span>{product.reviews} 条评论</span>
              </div>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-red-500">¥{product.price}</span>
                <Button>立即预订</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

const products = [
  {
    name: "黄果树瀑布景区门票",
    type: "门票",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 2345,
    description: "世界最大的瀑布群，壮观的自然奇观",
    price: 180
  },
  {
    name: "小七孔景区门票",
    type: "门票",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 1890,
    description: "贵州最美的喀斯特地貌，山水画卷",
    price: 150
  },
  {
    name: "贵阳安纳塔拉度假酒店",
    type: "酒店",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 1256,
    description: "奢华五星级度假酒店，尽享贵阳山城美景",
    price: 888
  },
  {
    name: "贵阳喜来登贵航酒店",
    type: "酒店",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 2078,
    description: "位于市中心的商务酒店，交通便利",
    price: 668
  }
]

