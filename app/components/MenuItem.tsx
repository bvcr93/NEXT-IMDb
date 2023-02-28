import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
    address: string
    Icon?: any
}

const MenuItem = ({title, address, Icon}: Props) => {
  return (
    <div className=''>
       
       <Link href={address} className="mx-4 lg:mx-6  hover:text-amber-500">
        <Icon className="sm:hidden mx-4 text-4xl  " sx = {{fontSize: "25px"}}/>
       <p className=' hidden sm:inline my-2 text-md'>{title}</p>
       </Link>
    </div>
  )
}

export default MenuItem