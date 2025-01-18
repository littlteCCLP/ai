'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Search, MapPin, Calendar, Tag, Home, Compass, Ticket, Bell, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LocalTours() {
  const [selectedCity, setSelectedCity] = useState('贵阳')

  return (
    <div className="min-h-screen max-w-lg mx-auto bg-white pb-16">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center gap-2 p-3">
          <button className="flex items-center text-base font-semibold">
            {selectedCity}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <div className="flex-1 relative">
            <Input
              placeholder="搜索周边活动"
              className="pl-9 py-2 bg-gray-100 border-none text-sm"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Categories */}
        <div className="px-3">
          <Tabs defaultValue="recommended" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b p-0 h-10">
              <TabsTrigger 
                value="recommended" 
                className="text-sm data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
              >
                推荐
              </TabsTrigger>
              <TabsTrigger 
                value="nature" 
                className="text-sm data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
              >
                自然风光
              </TabsTrigger>
              <TabsTrigger 
                value="culture" 
                className="text-sm data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
              >
                文化体验
              </TabsTrigger>
              <TabsTrigger 
                value="food" 
                className="text-sm data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
              >
                美食之旅
              </TabsTrigger>
              <TabsTrigger 
                value="shopping" 
                className="text-sm data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
              >
                特色购物
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full aspect-[2.5/1]">
        <Image
          src="/placeholder.svg?height=144&width=360"
          alt="Travel Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center px-3 py-2 border-b text-sm">
        <div className="flex gap-4">
          <button className="flex items-center">
            时间
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center">
            类型
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center">
            更多
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
        <button>
          推荐排序
        </button>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-2 p-3 overflow-x-auto">
        <Badge variant="secondary" className="text-xs whitespace-nowrap">周末游</Badge>
        <Badge variant="secondary" className="text-xs whitespace-nowrap">亲子游</Badge>
        <Badge variant="secondary" className="text-xs whitespace-nowrap">早鸟优惠</Badge>
      </div>

      {/* Activity List */}
      <div className="px-3 space-y-3">
        {activities.map((activity, index) => (
          <Card key={index} className="flex p-3 gap-3">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {activity.specialTag && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-1 rounded-bl-lg rounded-tr-lg">
                  {activity.specialTag}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0 relative">
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">{activity.title}</h3>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                {activity.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-[10px]">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                <Calendar className="w-3 h-3" />
                <span>{activity.date}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{activity.location}</span>
              </div>
              <div className="absolute right-0 bottom-0 text-red-500 font-semibold text-sm">
                ¥{activity.price}起
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-1 max-w-lg mx-auto">
        <Link href="#" className="flex flex-col items-center p-1">
          <Home className="w-5 h-5" />
          <span className="text-xs mt-0.5">首页</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <Compass className="w-5 h-5" />
          <span className="text-xs mt-0.5">发现</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <Ticket className="w-5 h-5" />
          <span className="text-xs mt-0.5">订单</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <Bell className="w-5 h-5" />
          <span className="text-xs mt-0.5">消息</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <User className="w-5 h-5" />
          <span className="text-xs mt-0.5">我的</span>
        </Link>
      </div>
    </div>
  )
}

const activities = [
  {
    title: "黄果树瀑布一日深度游 - 壮观瀑布群探秘之旅",
    tags: ["自然", "摄影", "深度游"],
    date: "2025.01.19 周日 09:00",
    location: "贵州省安顺市黄果树风景名胜区",
    price: 268,
    image: "/placeholder.svg?height=80&width=80",
    specialTag: "特惠"
  },
  {
    title: "青岩古镇文化体验之旅 - 明清古镇寻踪",
    tags: ["文化", "古镇", "美食"],
    date: "2025.03.11 周二 10:00",
    location: "贵州省贵阳市花溪区青岩古镇",
    price: 158,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    title: "梵净山佛教文化探索 - 云端圣境之旅",
    tags: ["文化", "徒步", "摄影"],
    date: "2025.03.15 周六 08:30",
    location: "贵州省铜仁市江口县梵净山",
    price: 328,
    image: "/placeholder.svg?height=80&width=80",
    specialTag: "热门"
  }
]

