"use client";

import { getAllTours } from "@/utils/action";
import { useQuery } from "@tanstack/react-query";
import TourList from "./TourList";
import { useState } from "react";

const TourPage = () => {
  const [search, setSearch] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["tours",search],
    queryFn: () => getAllTours(search),
  });
  return (
    <>
      <form className=" max-w-lg mb-12">
        <div className="w-full join">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="enter city or country"
          />
          <button className="btn btn-primary join-item" onClick={()=>setSearch('')} type="button">
            {isPending ? "Please wait" : "Reset"}
            
          </button>
        </div>
      </form>
      {isPending ? (
        <span className="loading "></span>
      ) : (
        <TourList data={data} />
      )}
    </>
  );
};

export default TourPage;
