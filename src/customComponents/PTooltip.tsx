import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface PTooltipProps {
    children: React.ReactNode;
    label?: string;
  }
 
export function PTooltip({children, label}: PTooltipProps)  {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
            {children}
            </TooltipTrigger>
            <TooltipContent>
            <p className="text-blueText text-sm [text-shadow:_2px_2px_2px_rgba(120,1,230,1)]
                border border-gray-500 h-fit p-1 bg-zinc-900 rounded-lg w-fit m-auto md:m-0"
            >
                {label}
            </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}