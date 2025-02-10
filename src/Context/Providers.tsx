'use client'
import React from 'react'
import {ThemeProvider} from "next-themes"
//import {Toaster} from "react-hot-toast"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Providers({children}:any) {
  return (
    <ThemeProvider attribute="class" defaultTheme='dark'>
      {children}
    </ThemeProvider>
  )
}
