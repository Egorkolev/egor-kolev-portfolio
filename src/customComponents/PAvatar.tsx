"use client";

import ProfileCard from '@/components/ProfileCard/ProfileCard';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from "aos";

export default function PAvatar() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    })
  }, []);

  return (
    <ProfileCard
      className="mx-auto"
      name="Iegor Koliev"
      title="Full Stack Developer"
      handle="kolevegor"
      status="Available for work"
      contactText="Contact Me"
      avatarUrl="avatar.png"
      showUserInfo={true}
      enableTilt={true}
      onContactClick={() => router.push('#contact')}
    />
  )
}
