import React from "react";
import profile from "../assets/profile.jpg";

export default function Info() {
  return (
    <div className="p-12 lg:fixed lg:w-40/100 top-1/3">
      <img src={profile} className="rounded-full w-48 mb-2" />
      <p className="font-title  uppercase text-4xl mb-4">
        Hi! I'm <span className="bg-gray-100 px-2 py-1">Robert</span>
      </p>
      <p>I am a frontend web developer from Romania</p>
    </div>
  );
}
