import React from "react";
import { NavLink } from "react-router-dom";

const CourseNav = ({ course }) => {
  return (
    <NavLink
      key={course.id}
      className=" px-3 py-3 text-bold font-mono border-b-2 hover:bg-slate-300"
      to={`/course/${course.id}`}
    >
      {course.title}
    </NavLink>
  );
};

export default CourseNav;
