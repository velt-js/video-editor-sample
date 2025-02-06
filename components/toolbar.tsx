"use client"

import { Undo, Redo, Users, Grid2X2, Type, Upload, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type React from "react"

interface Tool {
  id: string
  icon: React.ElementType
  label: string
}

const centerTools: Tool[] = [
  { id: "avatars", icon: Users, label: "Avatars" },
  { id: "elements", icon: Grid2X2, label: "Elements" },
  { id: "text", icon: Type, label: "Text" },
  { id: "uploads", icon: Upload, label: "Uploads" },
]

const backgroundTool: Tool = { id: "background", icon: Image, label: "Background" }

export function Toolbar() {
  return (
    <div className="flex items-center justify-between p-3 bg-white border-b">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Undo className="h-3.5 w-3.5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Redo className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="flex justify-center gap-1">
        {centerTools.map((tool) => (
          <Button
            key={tool.id}
            variant="ghost"
            className={cn(
              "flex flex-col items-center gap-0.5 h-auto py-1.5 px-2 hover:bg-gray-50",
              "text-gray-500 hover:text-gray-900",
            )}
          >
            <tool.icon className="h-4 w-4" />
            <span className="text-[10px] font-normal">{tool.label}</span>
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        className={cn(
          "flex flex-col items-center gap-0.5 h-auto py-1.5 px-2 hover:bg-gray-50",
          "text-gray-500 hover:text-gray-900",
        )}
      >
        <backgroundTool.icon className="h-4 w-4" />
        <span className="text-[10px] font-normal">{backgroundTool.label}</span>
      </Button>
    </div>
  )
}

