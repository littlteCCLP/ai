'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Home, Map, Calendar, Star, User, Info, Utensils, Car, TreesIcon as Tree } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SelfGuidedTour() {
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null)

  const spots = [
    { id: '1', x: 45, y: 20, type: 'waterfall', name: '恢宏瀑布' },
    { id: '2', x: 42, y: 25, type: 'info', name: '临瀑观景' },
    { id: '3', x: 48, y: 30, type: 'entrance', name: 'VIP专属入口' },
    { id: '4', x: 35, y: 35, type: 'parking', name: '停车场地' },
    { id: '5', x: 40, y: 40, type: 'entrance', name: '陡坡塘大门' },
    { id: '6', x: 55, y: 45, type: 'pavilion', name: '观景亭' },
    { id: '7', x: 30, y: 50, type: 'building', name: '天主教堂' },
    { id: '8', x: 45, y: 55, type: 'waterfall', name: '水帘洞' },
    { id: '9', x: 50, y: 60, type: 'rest', name: '休息区' },
    { id: '10', x: 40, y: 65, type: 'entrance', name: '游客中心' },
    { id: '11', x: 60, y: 70, type: 'waterfall', name: '滴水滩' },
    { id: '12', x: 45, y: 75, type: 'parking', name: '大巴停车场' },
  ]

  return (
    <div className="min-h-screen max-w-lg mx-auto bg-white relative">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white max-w-lg mx-auto">
        <div className="flex items-center gap-2 p-3 border-b">
          <div className="flex-1 relative">
            <Input
              placeholder="搜索景点"
              className="pl-9 py-1.5 bg-gray-100 border-none text-sm"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="pt-12 pb-16 relative h-screen w-full">
        <div className="relative w-full h-full">
          {/* Map Background */}
          <Image
            src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-3nHrTpivGpnOL4TvlfH0UX6O9xAU8i.png`}
            alt="Huangguoshu Map"
            layout="fill"
            objectFit="contain"
            className="select-none"
          />

          {/* Map Markers */}
          {spots.map((spot) => (
            <button
              key={spot.id}
              className={`absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 
                ${selectedSpot === spot.id ? 'scale-110' : ''}`}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={() => setSelectedSpot(spot.id)}
            >
              <div className="bg-white rounded-full p-1.5 shadow-lg">
                {spot.type === 'waterfall' && <Star className="w-5 h-5 text-blue-500" />}
                {spot.type === 'info' && <Info className="w-5 h-5 text-yellow-500" />}
                {spot.type === 'entrance' && <Map className="w-5 h-5 text-green-500" />}
                {spot.type === 'parking' && <Car className="w-5 h-5 text-gray-500" />}
                {spot.type === 'pavilion' && <Tree className="w-5 h-5 text-green-700" />}
                {spot.type === 'building' && <Home className="w-5 h-5 text-purple-500" />}
                {spot.type === 'rest' && <Utensils className="w-5 h-5 text-red-500" />}
              </div>
              {selectedSpot === spot.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-black bg-opacity-75 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10">
                  {spot.name}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-1 max-w-lg mx-auto">
        <Link href="#" className="flex flex-col items-center p-1">
          <Home className="w-5 h-5" />
          <span className="text-xs mt-0.5">首页</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <Map className="w-5 h-5 text-primary" />
          <span className="text-xs mt-0.5 text-primary">景区导览</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <Calendar className="w-5 h-5" />
          <span className="text-xs mt-0.5">预约购票</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <Star className="w-5 h-5" />
          <span className="text-xs mt-0.5">收藏</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <User className="w-5 h-5" />
          <span className="text-xs mt-0.5">我的</span>
        </Link>
      </div>
    </div>
  )
}

