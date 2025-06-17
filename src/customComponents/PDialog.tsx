import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
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
} from "@/components/ui/carousel"
import Image, { StaticImageData } from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from '@/components/ui/button'


interface DialogProps {
    dialogSwitcher: boolean;
    onChangeDialog: (type: boolean) => void;
    imgGalery: StaticImageData[];
    hrefLink?: string;
}

export default function PDialog({dialogSwitcher, onChangeDialog, imgGalery, hrefLink}: DialogProps) {
  return (
    <Dialog open={dialogSwitcher} onOpenChange={() => onChangeDialog(false)}>
        <DialogTrigger asChild>
        </DialogTrigger>
        <DialogContent className="sm:max-w-6xl border-none p-14">
            <DialogTitle></DialogTitle>
            <Carousel className="w-full h-auto m-auto">
                <CarouselContent>
                    {imgGalery.map((img, index) => (
                    <CarouselItem key={index}>
                        <div>
                        <Card className='border-none'>
                            <CardContent className="flex items-center justify-center p-0">
                                <Image
                                    style={{borderRadius: "5px"}}
                                    data-aos="fade-up"
                                    src={img}
                                    alt="Picture project" 
                                    priority
                                />
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='z-20 bg-pinkShade' />
                <CarouselNext className='z-20 bg-pinkShade' />
            </Carousel>
            <DialogFooter className='m-auto flex items-center flex-wrap'>
                {hrefLink?.length === 0 && <h1 className='text-green text-lg'>This website is in progress</h1>}
                <Button disabled={hrefLink?.length === 0} className='m-auto'>
                    <a
                        className='text-green text-lg flex items-center gap-2'
                        rel="preload"
                        style={{borderRadius: "5px"}}
                        href={hrefLink} 
                        target={"_blank"}
                    >
                        Visit Website
                        <FaExternalLinkAlt />
                    </a>
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
