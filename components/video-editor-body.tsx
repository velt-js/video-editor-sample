import { ScriptEditor } from "./script-editor"
import { Toolbar } from "./toolbar"
import { PreviewArea } from "./preview-area"
import { Timeline } from "./timeline"
import { useSetDocument } from "@veltdev/react";
export function VideoEditorBody() {

  useSetDocument("video-id-1", {documentName: "My Avatar Video"});

  return (
    <div className="flex-1 flex">
      {/* Left Sidebar */}
      <div className="w-[400px] border-r flex flex-col">
        <ScriptEditor />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Toolbar />
        <div className="flex-1 flex flex-col min-h-0">
          <PreviewArea />
          <Timeline />
        </div>
      </div>
    </div>
  )
} 