"use client"

import { ImageIcon } from "lucide-react"

export function PreviewArea() {
  return (
    <div className="flex-1 bg-[#fafafa] flex items-center justify-center p-8">
      <div className="w-full max-w-[640px] aspect-video bg-white rounded-lg shadow-sm relative commentable">
        <div className="absolute bottom-4 right-4 text-gray-200">
          <ImageIcon className="w-20 h-5 opacity-30" />
        </div>
      </div>
    </div>
  )
}

