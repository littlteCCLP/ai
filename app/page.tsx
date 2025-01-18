import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bell, Menu, MapPin, Home, ShoppingCart, Users, BookOpen, Paperclip, Image, Scissors, Phone, Mic, Compass } from 'lucide-react'
import Link from "next/link"

export default function AiAssistant() {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <Menu className="w-6 h-6 text-gray-600" />
        <Bell className="w-6 h-6 text-gray-600" />
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 flex flex-col space-y-6">
        {/* Welcome Message */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">你好，瑞雪</h1>
          <p className="text-lg text-gray-600">你的贵州旅行助手已上线！开始探索贵州的魅力吧。</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-6">
          {featureCards.map((card, index) => (
            <Link href={card.link || "#"} key={index}>
              <Card className="p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-20 h-20 rounded-full ${card.bgColor} flex items-center justify-center mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-tight">{card.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      {/* Bottom Toolbar */}
      <div className="border-t p-6">
        {/* Input Area */}
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <Input 
              placeholder="告诉我您想了解贵州旅行的什么" 
              className="pr-28 py-6 text-lg rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
              {actionButtons.map((button, index) => (
                <Button key={index} variant="ghost" size="icon" className="h-10 w-10 hover:bg-gray-200 rounded-full">
                  {button.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const featureCards = [
  { 
    title: "旅游规划", 
    description: "请按目的地、主题、游玩时间、交通方式、预算等", 
    icon: <MapPin className="w-10 h-10 text-blue-600" />, 
    bgColor: "bg-blue-100",
    link: "/travel-planning"
  },
  { 
    title: "旅居安排", 
    description: "请按居住目的地、居住时间、主题偏好来对话", 
    icon: <Home className="w-10 h-10 text-red-600" />, 
    bgColor: "bg-red-100",
    link: "/stay-arrangement"
  },
  { 
    title: "智能订购", 
    description: "找酒店、找门票、比价格、快下单", 
    icon: <ShoppingCart className="w-10 h-10 text-purple-600" />, 
    bgColor: "bg-purple-100",
    link: "/smart-booking"
  },
  { 
    title: "周边深度游", 
    description: "周边深度游，探索隐藏活动", 
    icon: <Users className="w-10 h-10 text-yellow-600" />, 
    bgColor: "bg-yellow-100",
    link: "/local-tours"  
  },
  {
    title: "旅行记录",
    description: "给我一张你的旅游图片，快速生产旅游日志，一键分享",
    icon: <BookOpen className="w-10 h-10 text-green-600" />,
    bgColor: "bg-green-100",
    link: "/travel-logs"
  },
  {
    title: "景区自助导览",
    description: "智能语音讲解，深入了解景点文化",
    icon: <Compass className="w-10 h-10 text-indigo-600" />,
    bgColor: "bg-indigo-100",
    link: "/self-guided-tour"
  },
]

const actionButtons = [
  { icon: <Paperclip className="w-6 h-6" /> },
  { icon: <Image className="w-6 h-6" /> },
  { icon: <Scissors className="w-6 h-6" /> },
  { icon: <Phone className="w-6 h-6" /> },
  { icon: <Mic className="w-6 h-6" /> },
]

