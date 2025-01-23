"use client";
import React, { useEffect, useRef, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { HiMiniMinusCircle } from "react-icons/hi2";
import { BiExpandAlt } from "react-icons/bi";
import { FaFolderClosed } from "react-icons/fa6";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function PTerminal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [index, setIndex] = useState(0);
  const typingSpeed = 20;

  const text = `I\`m a Frontend Developer with four years of experience in building responsive, user-focused web applications.
  I specialize in React, Next.js, and TypeScript, with a strong focus on creating scalable and maintainable code.
  With expertise in UI/UX principles and tools like Tailwind CSS, Shadcn UI, and Material UI, I deliver intuitive, accessible, and high-performance interfaces.
  I\`m passionate about transforming complex ideas into elegant, user-friendly solutions.`;

  const canvasWidth = 600;
  const canvasHeight = 310;

    useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 120,
        easing: 'ease-in-out',
      })
    }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.font = '18px "Courier New", Courier, monospace';
    ctx.fillStyle = '#32CD32';
    ctx.textBaseline = 'top';
    ctx.lineWidth = 2;

    const lineHeight = 25;
    const maxWidth = canvasWidth - 20;

    const drawText = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const currentText = text.slice(0, index + 1);

      const lines: string[] = [];
      let line = '';
      const words = currentText.split(' ');

      words.forEach((word) => {
        const testLine = line + word + ' ';
        const width = ctx.measureText(testLine).width;
        if (width < maxWidth) {
          line = testLine;
        } else {
          lines.push(line);
          line = word + ' ';
        }
      });

      if (line) lines.push(line);

      lines.forEach((line, i) => {
        ctx.fillText(line, 10, 10 + i * lineHeight);
      });
    };

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        drawText();
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <div className='relative max-w-[600px] min-w-[280px] w-[100%] h-fit flex-1'>
          <span className='absolute top-0 right-0 shadow-[0px_230px_360px_180px_rgba(120,1,230,0.1)] z-[-1] rounded-full'></span>
          <span className='absolute top-0 right-0 shadow-[0px_280px_360px_180px_rgba(0,120,230,0.3)] z-[-1] rounded-full'></span>
          <span className='absolute top-0 right-0 shadow-[0px_330px_360px_180px_rgba(120,1,230,0.2)] z-[-1] rounded-full'></span>
          <span className='absolute -bottom-52 right-20 w-80 h-80 -z-10 opacity-10'
            style={{
              background: 'url(/react.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
          }}></span>
        <div data-aos="fade-left" className='border border-gray-500 rounded'>
          <div className='bg-zinc-800 flex gap-2 items-center p-2 border-b-black border-b rounded rounded-b-lg'>
              <ul className='flex gap-1 items-center'>
              <li><IoIosCloseCircle className='text-red-500' /></li>
              <li><HiMiniMinusCircle className='text-yellow-500' /></li>
              <li><BiExpandAlt className='text-black bg-green rounded-full text-xs font-semibold p-0.5' /></li>
              </ul>
              <ul className='flex gap-2 items-center m-auto'>
              <li><FaFolderClosed className='text-blue-400' /></li>
              <li className='text-gray-300 font-semibold'>Egor-Kolev</li>
              </ul>
          </div>
          <div className='p-2 bg-zinc-900 rounded rounded-t-lg'>
              <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className='w-[100%] h-fit'></canvas>
          </div>
        </div>
    </div>
  );
}


