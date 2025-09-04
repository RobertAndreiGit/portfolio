import React from "react";
import profile from "../assets/profile.jpg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg"

export default function Info() {
  return (
    <div className="transition-all p-12 lg:fixed lg:w-40/100 top-1/2 transform lg:-translate-y-2/4 overflow-hidden">
      <img
        src={profile}
        className="rounded-full w-48 mb-2 opacity-0 animate-slide-in-1"
        alt="Profile"
      />
      <p className="font-title uppercase text-4xl mb-4 infoName opacity-0 animate-slide-in-2">
        Hi! I'm<span className="bg-gray-100 px-2 py-1">Robert Amarandei</span>
      </p>
      <p className="infoDesc opacity-0 animate-slide-in-3">
        I’m a Senior Frontend Engineer with over 6 years of experience building scalable, high-performance web applications using React, Next.js, and TypeScript. I specialize in designing maintainable, user-focused interfaces and improving developer workflows through modern state management, CI/CD pipelines, and cloud-based solutions.
        <br /><br />
        I’ve led initiatives such as migrating monorepos, modernizing legacy codebases, and implementing end-to-end testing to improve performance, stability, and maintainability. I also enjoy mentoring teams and fostering best practices in frontend development.
        <br /><br />
        I thrive on turning complex problems into efficient, elegant, and intuitive applications, and I’m passionate about creating products that deliver real impact for users.
      </p>
      <div className="opacity-0 animate-slide-in-3 mt-5">
        <div className="flex items-center align-center space-x-4">
        <a
          className="infoContac capitalize text-black bg-yellow-500 px-4 py-3 rounded text-xl inline-block"
          href="mailto:robert_amarandei@yahoo.com"
        >
          contact
        </a>
        
        <a
          href="https://www.linkedin.com/in/robert-andrei-a-6bb59494/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="transform origin-center scale-125 " />
        </a>
        </div>
      </div>
    </div>
  );
}
