import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";
import CourseNav from "./CourseNav";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-5">
      <div className="col-span-1">
        <div className="flex flex-col  items-center lg:items-start border-r-2">
          {courses.map((course) => (
            <CourseNav key={course.id} course={course}></CourseNav>
          ))}
        </div>
      </div>
      <div className="col-span-4 grid grid-cols-1 gap-y-10 lg:mx-10 lg:grid-cols-2 my-6 justify-items-center">
        {courses.map((course) => (
          <Course course={course} key={course.id}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
