import React from "react";
import Link from "next/link";

const LinkBar = ({ onCertificationsClick, showCertifications }) => {
  return (
    <div className="mx-6 xl:flex xl:mx-0 group grid m:justify-center xl:justify-center justify-none m:mx-3">
      {!showCertifications && (
        <button
          onClick={onCertificationsClick}
          className="sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
        >
          Show Dev Certification Links
        </button>
      )}
      {showCertifications && (
        <button
          onClick={onCertificationsClick}
          className="sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
        >
          Hide Dev Certification Links
        </button>
      )}
      <Link
        href="https://github.com/KBeKind"
        target="_blank"
        className="sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
      >
        Github: github.com/KBeKind
      </Link>
      <Link
        href="https://www.linkedin.com/in/kyle-riebeling/"
        target="_blank"
        className=" sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
      >
        Linkedin: linkedin.com/in/kyle-riebeling
      </Link>
    </div>
  );
};

export default LinkBar;
