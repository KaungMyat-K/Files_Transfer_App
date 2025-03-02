import React from "react";
import Constant from "../_utils/Constant";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900 text-center">
            <strong className="font-extrabold text-teal-700">Upload</strong>
            <span className="text-gray-900">, </span>
            <strong className="font-extrabold text-teal-700">Save</strong>
            <span className="text-gray-900"> and easily </span>
            <strong className="font-extrabold text-teal-700">Share</strong>
            <span className="text-gray-900"> your files in one place</span>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            {Constant.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-teal-600 shadow-sm hover:text-teal-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
