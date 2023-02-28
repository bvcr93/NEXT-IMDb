import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Results from './components/Results'



const inter = Inter({ subsets: ['latin'] })

const API_KEY = process.env.API_KEY //get key from .env.local



export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();


  const results = data.results;

  return (
    <div className='flex '>
      <Results results = {results} />
    </div>
  )
}
