import React from "react";
import HocSearch from "./HocSearch";
import Loader from "../common/Loader";

const Todo = ({ data }) => {
  const todoData = data?.map((item) => (
    <>
      <p>{item.title}</p>
    </>
  ));
  return <>{todoData.length > 0 ? todoData : <Loader />}</>;
};
const UpdatedTodo = HocSearch(Todo, "todos");
export default UpdatedTodo;
