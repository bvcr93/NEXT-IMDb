"use client"
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
type Props = {}
export default function Providers({ children }:{children : ReactNode}) {
    return (
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark:bg-gray-800 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
          {children}
        </div>
      </ThemeProvider>
    );
  }