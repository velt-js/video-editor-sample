"use client"

import { useState } from "react"
import { Plus, History, UserCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface ScriptItem {
  id: number
  avatar?: string
  name: string
  content: string
  isAddAvatar?: boolean
}

const scriptItems: ScriptItem[] = [
  {
    id: 1,
    name: "Amy",
    content: "Hi, I'm Amy",
    isAddAvatar: true,
  },
  {
    id: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Bahar",
    content: "With HeyGen, you can create and translate videos using AI.",
  },
  {
    id: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Bahar",
    content: "Here is a quick demo!",
  },
]

export function ScriptEditor() {
  const [items, setItems] = useState(scriptItems)

  const handleContentChange = (id: number, content: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, content } : item)))
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Wrapper for vertical centering */}
      <div className="flex-1 flex items-center overflow-hidden">
        {/* Scrollable container for items */}
        <div className="w-full max-h-full overflow-y-auto py-6 commentable">
          {items.map((item) => (
            <div key={item.id} className="px-6 py-4 border-b last:border-b-0">
              {/* Scene Header - All elements in one line */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                  {item.id}
                </div>
                {item.isAddAvatar ? (
                  <Button
                    variant="ghost"
                    className="h-7 gap-2 text-violet-600 hover:text-violet-700 hover:bg-violet-50 pl-0"
                  >
                    <UserCircle2 className="h-4 w-4" />
                    <span className="text-xs">Add Avatar</span>
                  </Button>
                ) : (
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      {item.avatar ? (
                        <AvatarImage src={item.avatar} alt={item.name} />
                      ) : (
                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                      )}
                    </Avatar>
                    <span className="text-xs">{item.name}</span>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="pl-11">
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => handleContentChange(item.id, e.currentTarget.textContent || "")}
                  className="min-h-[60px] bg-gray-50 rounded-md p-3 text-xs outline-none focus:ring-2 focus:ring-violet-500"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <div className="mt-2 flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-500">
                    <Plus className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-500">
                    <History className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Scene Button */}
      <div className="p-3 border-t">
        <Button
          variant="outline"
          className="w-full justify-center gap-2 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-200 transition-all text-xs"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Scene
        </Button>
      </div>
    </div>
  )
}

