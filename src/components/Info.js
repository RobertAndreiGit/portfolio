import React from "react";
import profile from "../assets/profile.jpg";
/*import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";*/

export default function Info() {
  return (
    <div className="transition-all p-12 lg:fixed lg:w-40/100 top-1/2 transform lg:-translate-y-2/4 overflow-hidden">
      <img
        src={profile}
        className="rounded-full w-48 mb-2 opacity-0 animate-slide-in-1"
        alt="Profile"
      />
      <p className="font-title uppercase text-4xl mb-4 infoName opacity-0 animate-slide-in-2">
        Hi! I'm <span className="bg-gray-100 px-2 py-1">Robert Andrei</span>
      </p>
      <p className="infoDesc opacity-0 animate-slide-in-3">
        I am a web developer from Romania
      </p>
      {/*<div className="my-5">
        <a
          href="https://www.linkedin.com/in/robert-andrei-amarandei-6bb59494/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="transform origin-center scale-125 " />
        </a>
      </div>*/}
      <div className="opacity-0 animate-slide-in-3">
        <a
          className="infoContac mt-5 capitalize text-black bg-yellow-500 px-4 py-3 rounded text-xl inline-block"
          href="mailto:robert_amarandei@yahoo.com"
        >
          contact
        </a>
      </div>
    </div>
  );
}
