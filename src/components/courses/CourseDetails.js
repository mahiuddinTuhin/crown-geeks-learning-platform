import React from "react";

import { NavLink, useLoaderData } from "react-router-dom";
import { DiVisualstudio, DiTerminal } from "react-icons/di";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
const CourseDetails = () => {
  const course = useLoaderData();
  const {
    course_image,
    title,
    intro,
    why_learn_it,
    cart_details,
    course_overview,
    course_content,
  } = course;

  return (
    <div>
      <div className="p-6 py-12 bg-violet-700 text-gray-900  hover:badge-accent">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <a
              href="/"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400 hover:badge-error hover:text-slate-100"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900 hover:cursor-pointer">
              {title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              {intro}
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50 hover:bg-violet-700"
              >
                Enroll now
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900 hover:badge-accent"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src={course_image}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
        />
      </section>
      {/* why you learn it */}
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">
                  Why You will learn it?
                </h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400"></span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {why_learn_it[0]}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Dec 2020
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
          <h2 className="mb-8 text-4xl font-bold leading-none text-center ">
            After taking course, what you will be able to do?
          </h2>
          <ul className="mt-24 grid gap-3 md:grid-cols-2 lg:grid-cols-3 items-start justify-center">
            {course_overview.map((courseOverview) => (
              <li className="flex items-start space-x-2">
                <DiTerminal className="text-purple-800 text-3xl" />
                <span className="text-2xl">{courseOverview}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
            Download PDF about the course outline
          </h1>
          <NavLink className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Download
          </NavLink>
        </div>
      </section>
      {/* course structure */}
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              Course Context
            </h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            {course_content.map((e) => (
              <p className="flex text-3xl items-center">
                <DiVisualstudio className=" text-3xl mr-4 text-fuchsia-800" />
                {e}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* download pdf section */}

      {/* pricing section */}

      <div>
        <section className="py-20 bg-gray-800 text-gray-100">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <span className="font-bold tracking-wider uppercase text-violet-400">
                Pricing
              </span>
              <h2 className="text-4xl font-bold lg:text-5xl">
                Choose your best plan
              </h2>
            </div>
            <div className="flex flex-wrap items-stretch -mx-4">
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Beginner</h4>
                    <span className="text-6xl font-bold">Free</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-gray-400">
                    A continuos session with group of courgefull students.
                  </p>
                  <ul className="space-y-2 ">
                    <li className="flex items-center space-x-2">
                      <AiFillCheckCircle />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiOutlineCheckCircle />
                      <span>Completely consistant Class</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiOutlineCheckCircle />
                      <span>Lab with viva</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiOutlineCheckCircle />
                      <span>Weekly assignment</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiOutlineCheckCircle />
                      <span>Seminar with practicle principle</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 text-gray-900"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-400 text-gray-900">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Pro</h4>
                    <span className="text-6xl font-bold">
                      ${cart_details.after_discount}
                      <span className="text-sm tracking-wide">/month</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    Monthly basis payment system with easy isntallment.
                  </p>
                  <ul className="space-y-2 ">
                    <li className="flex items-center space-x-2">
                      <AiFillCheckCircle />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiFillCheckCircle />
                      <span>Completely consistant Class</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiFillCheckCircle />
                      <span>Lab with viva</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiOutlineCheckCircle />
                      <span>Weekly assignment</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiOutlineCheckCircle />
                      <span>Seminar with practicle principle</span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="/"
                    className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-800 text-violet-400"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Team</h4>
                    <span className="text-6xl font-bold">
                      ${cart_details.cost}
                      <span className="text-sm tracking-wide">/month</span>
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-400">
                    The best package in team mode you can ever get.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center space-x-2">
                      <AiFillCheckCircle />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiFillCheckCircle />
                      <span>Completely consistant Class</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiFillCheckCircle />
                      <span>Lab with viva</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiFillCheckCircle />
                      <span>Weekly assignment</span>
                    </li>
                    <li className="flex items-center  space-x-2">
                      <AiFillCheckCircle />
                      <span>Seminar with practicle principle</span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="/"
                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 text-gray-900"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
