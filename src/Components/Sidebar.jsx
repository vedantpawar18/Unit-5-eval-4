import React, { useEffect, useState } from 'react';
import {useSearchParams} from "react-router-dom"

const Sidebar = () => {
  const [searchParams, setSearchParams]= useSearchParams();

  const initialSortParams= searchParams.get("sortBy");

  const [sortBy, setSortBy] =useState(initialSortParams || "");

  const handleSortBy =(e) =>{
    setSortBy(e.target.value)
};
console.log(sortBy)

useEffect(()=>{
  if(sortBy){
      const params={};
      sortBy && (params.sortBy= sortBy);
      setSearchParams(params);
  }
},[setSearchParams, sortBy]);

  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div onChange={handleSortBy}>
        <div>
          <input type="radio" data-cy="asc" name='sortBy' value="asc" defaultChecked={sortBy==="asc"} />
          <label>Ascending</label>
        </div>
        <div>
          <input type="radio" name='sortBy' data-cy="desc" value="desc" defaultChecked={sortBy==="desc"}/>
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
