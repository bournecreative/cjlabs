"use client"
import { useState } from 'react'
import { Overlay } from '@/components/Overlay/Overlay';
import { Navigation } from '@/components/Navigation/Navigation';
import { Hero50 } from "@/components/Hero50/Hero50";
import { OverLayContext } from '@/Contexts/OverlayContext';
import "./globals.css";

export default function Home() {

  const [state, dispatch] = useState(false);

  return (
    <>
      <OverLayContext.Provider value={{state, dispatch }}>
        <Navigation />
        <Overlay />
        <main>
          <Hero50 />
        </main>
      </OverLayContext.Provider>
    </>
  );
}
