
import Results from './components/Results'



export const dynamic = "force-dynamic";

const API_KEY = process.env.API_KEY 



export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();


  const results = data.results;

  return (
    <div className='flex '>
      <Results results = {results} />
    </div>
  )
}
