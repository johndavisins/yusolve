import React from "react";
import { Consultation } from "..";

export default function Breadcrumbs({
  image,
  title,
  description,
  isButton = true,
}) {
  return (
    <section
      id="breadcrumbs"
      className="min-h-[450px] flex flex-col justify-end bg-dark lamp__container relative z-0 pt-20 pb-10"
    >
      <div className="container relative z-10 flex items-start flex-col gap-5 text-white">
        <div className="flex flex-col gap-3 w-full sm:w-3/5 lg:w-2/5 items-start">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {title}
          </h1>
          <p className="text-gray-300 pb-3">{description}</p>
          {isButton ? <Consultation /> : <></>}
        </div>
      </div>
      <div className="absolute z-[-2] top-0 right-0 w-full lg:w-5/12 h-full after:bg-dark after:top-0 after:left-0 after:absolute after:w-full after:h-full after:z-0 after:bg-opacity-80 sm:after:bg-opacity-10">
        <img
          src={image}
          alt={title}
          title={title}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
