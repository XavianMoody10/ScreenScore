import React from "react";
import { useSearchParams } from "react-router-dom";

export const CatalogFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className=" max-w-[1600px] mx-auto flex justify-end relative z-10">
      <select
        name="category"
        id="category"
        className=" border p-2 font-medium w-full max-w-[200px]"
        value={category || "trending"}
        onChange={(e) => setSearchParams({ category: e.target.value })}
      >
        <option value="trending">Trending</option>
        <option value="now_playing">Now Playing</option>
      </select>
    </div>
  );
};
