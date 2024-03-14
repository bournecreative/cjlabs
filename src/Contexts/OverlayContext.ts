import { Dispatch, SetStateAction, createContext } from 'react'

export interface OverlayContextType {
   state: boolean
   dispatch: Dispatch<SetStateAction<boolean>>
}

export const OverLayContext = createContext<OverlayContextType | null>(null)