"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import EmailLink from "./EmailLink";
//import LinkBar from "./LinkBar";
import ProjectPanelContainer from "./ProjectPanelContainer";
import CertificationsLinkBar from "./CertificationsLinkBar";

const HomeComponent = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const toggleCertifications = () => setShowCertifications(!showCertifications);

  useEffect(() => {
    if (showCertifications) {
      setShouldRender(true);
    } else {
      setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    }
  }, [showCertifications]);

  return (
    <>
      <div className="bg-gradient-to-bl from-sky-500 to-sky-950 p-4">
        <div className="mx-4">
          <div className="my-4">
            <p className="text-5xl mx-4 my-3"></p>
            <p className="text-3xl mx-4 my-3">KBeKind</p>
            <EmailLink />
          </div>
          <hr className="sm:m-5" />
          <div className="text-justify w-full md:w-5/6 lg:w-3/4 xl:w-1/2 md:m-4 p-4 ms-0 me-8 ms-3 my-2 flex">
            <p className="">
              Software engineer with a passion for learning, creating, and
              connecting with others. Experience with teaching software
              development, building full-stack, working cooperatively on a
              management team, and completing complex projects within the scope
              of assigned deadlines. Eager to work with a skilled development
              team to produce high quality code for robust applications.
            </p>
          </div>
          {/* <LinkBar
            onCertificationsClick={toggleCertifications}
            showCertifications={showCertifications}
          /> */}
          <div
            className={`transform transition-all duration-1000 ease-in-out ${
              showCertifications
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {shouldRender && <CertificationsLinkBar />}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-sky-950 to-sky-500 p-4">
        <div className="mx-4">
          <hr className="sm:m-5" />
          <div className="m-4 p-4">
            <p className="text-3xl mb-5">Recent Projects</p>
            <div className=" group/1">
              <div className="lg:flex">
                <ProjectPanelContainer
                  name="Resource Manager: React Front-End"
                  tech="React, Next.js, Javascript, Tailwind CSS"
                  imageSource="/images/company-react.jpg"
                  link="https://github.com/KBeKind/company-project-react-nextjs"
                />
                <ProjectPanelContainer
                  name="Resource Manager: .Net Front-End & Back-End"
                  tech="C#, DotNet, Bootstrap, MySQL"
                  imageSource="/images/company-dotnet.jpg"
                  link="https://github.com/KBeKind/company-project-dotnet"
                />
                <ProjectPanelContainer
                  name="leet receipt (live project on Solana devnet)"
                  tech="React, Next.js, TypeScript, Tailwind CSS, Solana"
                  imageSource="/images/leet-receipt.jpg"
                  link="https://leet-receipt-git-main-kbekind.vercel.app/"
                />
              </div>
              {/* comment for help visual separation */}

              <div className="lg:flex">
                <ProjectPanelContainer
                  name="Resoled"
                  tech="Java, Spring Boot, Thymeleaf, JavaScript, Bootstrap, CSS, MySQL "
                  imageSource="/images/resoled-home.jpg"
                  link="https://github.com/KBeKind/resoled"
                />

                <ProjectPanelContainer
                  name="Garden Party"
                  tech="Java, Spring Boot, Thymeleaf, Bootstrap, CSS, MySQL"
                  imageSource="/images/garden-party.jpg"
                  link="https://github.com/KBeKind/java-gard"
                />

                <ProjectPanelContainer
                  name="Fun Blasters"
                  tech="Python, PyGame"
                  imageSource="/images/fun-blasters.jpg"
                  link="https://github.com/KBeKind/fun-blasters"
                />

                {/* comment for help visual separation */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
