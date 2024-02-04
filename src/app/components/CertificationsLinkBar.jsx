import React from "react";
import Link from "next/link";

const CertificationsLinkBar = () => {
  return (
    <>
      {/* <hr className="sm:m-5 sm:w-96  m:justify-center xl:justify-center" /> */}

      <div className="mx-6 xl:flex xl:mx-0 group grid m:justify-center xl:justify-center justify-none m:mx-3">
        <Link
          href="https://www.coursera.org/user/e723a936558675967c109bf4e0abf7f1"
          target="_blank"
          className="sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
        >
          Coursera Certifications
        </Link>
        <Link
          href="https://app.pluralsight.com/profile/kyle-riebeling"
          target="_blank"
          className="sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
        >
          Pluralsight Certifications
        </Link>

        <Link
          href="https://www.hackerrank.com/profile/KBeKind"
          target="_blank"
          className="sm:m-4 my-4 p-4 border-2 shadow-xl sm:w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
        >
          Hacker Rank Certifications
        </Link>
      </div>
    </>
  );
};

export default CertificationsLinkBar;
