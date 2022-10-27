import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return <div>this is the course page</div>;
};

export default Courses;
