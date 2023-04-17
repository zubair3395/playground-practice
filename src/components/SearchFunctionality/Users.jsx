import React from "react";
import HocSearch from "./HocSearch";
import Loader from "../common/Loader";
const Users = ({ data }) => {
  const userData = data?.map((item) => (
    <>
      <p>{item.name}</p>
    </>
  ));
  return <>{userData.length > 0 ? userData : <Loader />}</>;
};
const UpdatedUser = HocSearch(Users, "users");
export default UpdatedUser;
