import React from "react";
import Link from "next/link";

const LinkBar = () => {
  return (
    <div className="mx-6 xl:flex xl:mx-0 group grid m:justify-center xl:justify-center justify-none m:mx-3">
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
      <Link
        href="https://www.hackerrank.com/KBeKind"
        target="_blank"
        className="sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
      >
        HackerRank: hackerrank.com/KBeKind
      </Link>
    </div>
  );
};

export default LinkBar;
