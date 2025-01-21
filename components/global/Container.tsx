import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children,className,ref}:{children:React.ReactNode,className?:string,ref?:any}) => {
  return (
    <div ref={ref} className={cn('mx-auto  max-w-6xl lg:max-w-7xl xl:w-full  px-8 ',className)}>{children}</div>
  )
}

export default Container