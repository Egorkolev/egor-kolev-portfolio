import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";


interface DialogProps {
    dialogSwitcher: boolean;
    onChangeDialog: (type: boolean) => void;
    imgGalery: StaticImageData[];
    hrefLink?: string;
}

export default function PDialog({dialogSwitcher, onChangeDialog, imgGalery, hrefLink}: DialogProps) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    const handleThumbnailClick = (index: number) => {
        if (api) {
            api.scrollTo(index)
            setCurrent(index)
        }
    }

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <Dialog open={dialogSwitcher} onOpenChange={() => onChangeDialog(false)}>
            <DialogTrigger asChild>
            </DialogTrigger>
            <DialogContent className="sm:max-w-5xl border-none p-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
                <DialogTitle className="text-slate-900 dark:text-white text-xl font-semibold mb-4">Project Gallery</DialogTitle>
                
                <div className="space-y-6">
                    {/* Shadcn/ui Carousel */}
                    <div className="relative bg-slate-100/60 dark:bg-slate-800/30 rounded-xl p-4">
                        <Carousel className="w-full" setApi={setApi}>
                            <CarouselContent>
                                {imgGalery.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative aspect-video">
                                            <Image
                                                className="w-full h-full object-contain rounded-lg"
                                                src={img}
                                                alt={`Project image ${index + 1}`} 
                                                priority
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 bg-white/90 dark:bg-slate-900/80 hover:bg-slate-50/95 dark:hover:bg-slate-800/90 text-slate-900 dark:text-white border-slate-300 dark:border-slate-600" />
                            <CarouselNext className="right-2 bg-white/90 dark:bg-slate-900/80 hover:bg-slate-50/95 dark:hover:bg-slate-800/90 text-slate-900 dark:text-white border-slate-300 dark:border-slate-600" />
                        </Carousel>
                    </div>
                    
                    {/* Миниатюры */}
                    {imgGalery.length > 1 && (
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 max-h-32 overflow-y-auto">
                            {imgGalery.map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`relative group cursor-pointer ${current === index ? 'ring-2 ring-blue-500' : ''}`}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <Image
                                        className="w-full h-16 object-cover rounded-lg border border-slate-300/50 dark:border-slate-600/30 hover:scale-105 transition-transform duration-300"
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`} 
                                        priority
                                    />
                                    <div className={`absolute inset-0 rounded-lg transition-colors duration-300 ${current === index ? 'bg-blue-500/20' : 'bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-black/20'}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <DialogFooter className='flex items-center justify-center gap-4 pt-4'>
                    {!hrefLink && (
                        <p className='text-amber-600 dark:text-yellow-400 text-sm'>This website is in progress</p>
                    )}
                    {hrefLink && (
                        <a
                            className='theme-toggle bg-blue-500/20 text-slate-900 dark:text-white flex items-center gap-2'
                            href={hrefLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
