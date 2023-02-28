"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
type Props = {};

const SearchField = (props: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex justify-between mt-5 items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keyword..."
        className="border-none flex-1
         italic outline-none ml-4  bg-transparent"
      />
      <button disabled= {!search} type="submit" className="mr-16
       disabled:text-red-500   ">Search</button>

    </form>
  );
};

export default SearchField;
