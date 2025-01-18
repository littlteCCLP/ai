'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Home, Compass, Heart, MessageCircle, Share2, PlusCircle, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TravelLogs() {
  const [selectedImages, setSelectedImages] = useState<File[]>([])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImages(Array.from(event.target.files))
    }
  }

  const handleGenerateTravelLog = () => {
    // Here you would implement the logic to generate and share the travel log
    console.log('Generating travel log with', selectedImages.length, 'images')
  }

  return (
    <div className="min-h-screen max-w-lg mx-auto bg-white pb-16">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b p-3">
        <h1 className="text-lg font-semibold text-center">旅行记录</h1>
      </header>

      {/* Upload Section */}
      <div className="p-4 bg-gradient-to-b from-blue-50 to-white">
        <Card className="p-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Upload className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">上传照片生成游记</h2>
              <p className="text-sm text-gray-500 mb-4">AI智能分析照片，一键生成精美游记</p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button as="span" size="lg" className="gap-2 cursor-pointer">
                <ImageIcon className="w-5 h-5" />
                选择照片
              </Button>
            </label>
            {selectedImages.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">{selectedImages.length} 张照片已选择</p>
                <Button onClick={handleGenerateTravelLog} className="mt-2">
                  生成游记
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Travel Logs Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">精选游记</h2>
        <div className="grid grid-cols-2 gap-4">
          {travelLogs.map((log, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <div className="aspect-[3/4]">
                  <Image
                    src={log.image || "/placeholder.svg"}
                    alt={log.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute top-2 left-2">
                  <div className="flex items-center gap-1 bg-black bg-opacity-50 rounded-full px-2 py-1">
                    <Image
                      src={log.authorAvatar || "/placeholder.svg"}
                      alt={log.author}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span className="text-xs text-white">{log.author}</span>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold line-clamp-2 mb-1">{log.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {log.likes}
                    </button>
                    <button className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {log.comments}
                    </button>
                  </div>
                  <button>
                    <Share2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Card>
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
          <Compass className="w-5 h-5" />
          <span className="text-xs mt-0.5">发现</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-2 -mt-8">
          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <PlusCircle className="w-8 h-8" />
          </div>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs mt-0.5">消息</span>
        </Link>
        <Link href="#" className="flex flex-col items-center p-1">
          <Image
            src="/placeholder.svg?height=20&width=20"
            alt="Profile"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="text-xs mt-0.5">我的</span>
        </Link>
      </div>
    </div>
  )
}

const travelLogs = [
  {
    title: "黄果树瀑布之旅 | 壮观的亚洲第一瀑布",
    author: "贵州探索者",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=400&width=300",
    likes: "2.8k",
    comments: "326",
  },
  {
    title: "青岩古镇｜漫步明清建筑群，品味贵州小吃",
    author: "美食侦探",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=400&width=300",
    likes: "1.5k",
    comments: "158",
  },
  {
    title: "梵净山朝圣之旅｜云端佛国的震撼",
    author: "旅行笔记",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=400&width=300",
    likes: "3.2k",
    comments: "428",
  },
  {
    title: "西江千户苗寨｜领略苗族文化的魅力",
    author: "文化探索",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=400&width=300",
    likes: "2.1k",
    comments: "246",
  },
]

