"use client"

import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScriptEditor } from "./script-editor"
import { Toolbar } from "./toolbar"
import { PreviewArea } from "./preview-area"
import { Timeline } from "./timeline"
import { VeltCommentTool, VeltHuddleTool, VeltNotificationsTool, VeltPresence, VeltSidebarButton } from "@veltdev/react"
import { VideoEditorBody } from "./video-editor-body"

export default function VideoEditor() {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Top Navigation */}
      <header className="h-12 flex items-center gap-3 border-b bg-white px-3">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ArrowLeft className="h-3.5 w-3.5" />
          </Button>
          <span className="text-sm font-medium">New Video</span>
          <Badge
            variant="secondary"
            className="bg-violet-100 text-violet-700 hover:bg-violet-100 text-[10px] px-1.5 py-0.5"
          >
            BETA
          </Badge>
          <Button variant="link" className="text-xs text-muted-foreground">
            Use the old editor
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <VeltPresence />
          <VeltHuddleTool type="audio" />
          <VeltCommentTool />
          <VeltSidebarButton />
          <VeltNotificationsTool />
          {/* <Button variant="outline" size="sm" className="text-xs border-gray-200 hover:bg-gray-50 hover:text-gray-900">
            Feedback
          </Button> */}
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 text-xs border-gray-200 hover:bg-gray-50 hover:text-gray-900"
          >
            <Play className="h-3.5 w-3.5" />
            Preview
          </Button>
          <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-xs">
            Generate
          </Button>
        </div>
      </header>

      <VideoEditorBody />
    </div>
  )
}

