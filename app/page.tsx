"use client"

import VideoEditor from "../components/video-editor"
import YourAuthComponent from "../components/YourAuthComponent"
import VeltCustomization from "@/components/VeltCustomization"
import { VeltComments, VeltCommentsSidebar, VeltCursor, VeltHuddle, VeltProvider } from "@veltdev/react"

export default function SyntheticV0PageForDeployment() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <YourAuthComponent />
      <VeltComments textMode={true} commentPinHighlighter={false} allowedElementClassNames={["commentable"]} />
      <VeltCommentsSidebar pageMode={true} />
      <VeltHuddle />
      {/* <VeltCursor /> */}
      <VeltCustomization /> 
      <VideoEditor />
    </VeltProvider>
  )
}