import React from "react";
import { useContext } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiCoffee } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../context/UserContex";
const Course = ({ course }) => {
  const { setCourse } = useContext(MainContext);
  setCourse(course);
  const {
    course_image,
    title,
    intro,
    ratings,
    enrolled,
    created_by,
    total_vote,
  } = course;
  return (
    <div>
      <div
        style={{ minHeight: "570px", maxHeight: "570px" }}
        className="card w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img src={course_image} alt="Shoes" />
        </figure>
        <div className="card-body text-gray-600 ">
          <h2 className="card-title">
            {title}
            <FiCoffee className="text-5xl text-slate-400 hover:text-amber-500"></FiCoffee>
          </h2>
          <div className="badge badge-secondary hover:badge-accent font-mono">
            {created_by}
          </div>
          <p>{intro}</p>
          <div className="flex justify-around items-center mb-4">
            <div className="card-actions flex flex-col my-3 justify-items-start">
              <div className="badge badge-success hover:badge-error">
                {ratings}
                <BsStarFill className="ml-3" />
                <BsStarFill /> <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <div className="badge badge-success hover:badge-error">
                Vote: {total_vote}
              </div>
              <div className="badge badge-success hover:badge-error">
                Enrolled: {enrolled}
              </div>
            </div>
            <div>
              <NavLink
                to={`/course/${course.id}`}
                className="px-4 badge badge-error hover:badge-success text-slate-100 rounded-lg py-4 text-xl"
              >
                {" "}
                Check Out
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
