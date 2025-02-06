"use client"

import { Eye, LayoutGrid, Play, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Scene {
  id: number
  thumbnail?: string
  isActive?: boolean
  duration?: string
}

const scenes: Scene[] = [
  {
    id: 1,
    isActive: true,
    duration: "0:02",
  },
  {
    id: 2,
    thumbnail: "/placeholder.svg?height=100&width=200",
    duration: "0:04",
  },
  {
    id: 3,
    thumbnail: "/placeholder.svg?height=100&width=200",
    duration: "0:02",
  },
]

export function Timeline() {
  return (
    <div className="bg-white border-t">
      {/* Timeline Header */}
      <div className="px-3 h-10 flex items-center border-b">
        <Button variant="ghost" size="sm" className="text-xs text-gray-500 hover:text-gray-900 gap-1.5">
          <LayoutGrid className="h-3.5 w-3.5" />
          Hide timeline
        </Button>
        <div className="flex-1 flex justify-center items-center gap-3">
          <span className="text-xs tabular-nums text-gray-500">00:00</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full bg-violet-600 text-white hover:bg-violet-700 hover:text-white"
          >
            <Play className="h-3.5 w-3.5" />
          </Button>
          <span className="text-xs tabular-nums text-gray-500">00:07</span>
        </div>
        <div className="w-[80px]" /> {/* Spacer to balance the hide timeline button */}
      </div>

      {/* Scene Thumbnails */}
      <div className="p-3 flex justify-center commentable">
        <div className="flex items-start gap-1.5">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className={cn(
                "group relative",
                "w-[120px] h-[67.5px] rounded-md transition-all",
                "border-2",
                scene.isActive ? "border-violet-600" : "border-gray-200 hover:border-violet-200",
              )}
            >
              {scene.thumbnail ? (
                <img
                  src={scene.thumbnail || "/placeholder.svg"}
                  alt={`Scene ${scene.id}`}
                  className="w-full h-full object-cover rounded-sm"
                />
              ) : (
                <div className="w-full h-full rounded-sm bg-gray-50 flex items-center justify-center">
                  <span className="text-xl font-medium text-gray-300">{scene.id}</span>
                </div>
              )}
              {scene.duration && (
                <div className="absolute top-1 left-1 px-1 py-0.5 bg-black/50 rounded text-[8px] text-white font-medium">
                  {scene.duration}
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-black/60 text-white"
              >
                <Eye className="h-2.5 w-2.5" />
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            className={cn(
              "w-[120px] h-[67.5px] rounded-md",
              "border-2 border-dashed border-gray-200",
              "hover:border-violet-200 hover:bg-violet-50/50",
              "flex items-center justify-center",
            )}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

