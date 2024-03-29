
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Card = ({result}: any) => {
  return (

<div className="cursor-pointer
 sm:p-3 sm:hover:shadow-slate-400 
sm:shadow-md rounded-lg sm:border
 sm:border-slate-400 sm:m-2 
 transition-shadow duration-200 group">
      
      <Link href={`/movie/${result.id}`}>
      <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
     
     
          alt="image is not available"
        ></Image>
        <div className="p-2">
   
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
          
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card