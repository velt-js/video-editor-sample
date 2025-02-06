import { VeltSidebarButtonWireframe } from '@veltdev/react';
import { MessageSquare } from 'lucide-react';

const VeltSidebarButtonWf = () => {
  return (
    <VeltSidebarButtonWireframe>
      <div className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium hover:bg-gray-50 hover:text-gray-900">
        <MessageSquare className="w-5 h-5 text-gray-500 stroke-[1.5]" />
        <span><VeltSidebarButtonWireframe.CommentsCount /></span>
      </div>
    </VeltSidebarButtonWireframe>
  );
};

export default VeltSidebarButtonWf;