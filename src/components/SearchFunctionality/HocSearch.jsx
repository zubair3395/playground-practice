import axios from "axios";
import React, { useEffect, useState } from "react";
const HocSearch = (WrappedComponent, entity) => {
  const UpdatedValue = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/${entity}`)
        .then((response) => setData(response.data));
    }, []);
    const filterData = data?.slice(0, 10)?.filter((data) => {
      if (entity === "users") {
        //search functionailty using indexOf 
        return data?.name?.toLowerCase().indexOf(term) >= 0;
      }
      if (entity === "todos") {
        // search Functionality using includes method
        return data?.title?.toLowerCase().includes(term);
      }
    });
    return (
      <>
        <input
          type="text"
          className="form-control my-3"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="serach"
        />
        <WrappedComponent data={filterData} />
      </>
    );
  };
  return UpdatedValue;
};

export default HocSearch;
