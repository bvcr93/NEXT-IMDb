import Card from "./Card";

interface Movie {
  adult: boolean;
  backdrop_path: string ;
  belongs_to_collection: any;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string ;


release_date: string;
status: string;
title: string;
vote_average: number;
vote_count: number;
}

interface ResultsProps {
  results: Movie[];
}

const Results = ({ results }: ResultsProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 
    2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card result  = {result}/>
      ))}
    </div>
  );
};

export default Results;
