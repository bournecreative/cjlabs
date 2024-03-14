"use client"
import "./globals.css";
import { Overlay } from '@/components/Overlay/Overlay';
import { Navigation } from '@/components/Navigation/Navigation';
import { Hero50 } from "@/components/Hero50/Hero50";
import { Dispatch, SetStateAction, createContext, useState } from 'react'

export interface Test {
   state: boolean
   dispatch: Dispatch<SetStateAction<boolean>>
}

export const OverLayContext = createContext<Test | null>(null)

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
