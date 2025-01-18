import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '旅行记录 | AI Travel Assistant',
  description: '上传照片，自动生成精美游记，分享你的贵州旅行体验。',
}

export default function TravelRecordsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}

