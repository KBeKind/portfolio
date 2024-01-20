import Link from "next/link";
import EmailLink from "./components/EmailLink";
import LinkBar from "./components/LinkBar";
import CertificationsHolder from "./components/CertificationsHolder";
import ProjectPanel from "./components/ProjectPanel";
import ProjectPanelContainer from "./components/ProjectPanelContainer";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-bl from-sky-500 to-sky-950 p-4">
        <div className="mx-4">
          <div className="my-4">
            <p className="text-5xl mx-4 my-3">Kyle Riebeling</p>
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
          <LinkBar />
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
                  name="leet receipt"
                  imageSource="/images/leet-receipt.jpg"
                  link="https://leet-receipt-git-main-kbekind.vercel.app/"
                />

                <ProjectPanelContainer
                  name="Resoled"
                  imageSource="/images/resoled-home.jpg"
                  link="https://github.com/KBeKind/resoled"
                />

                <ProjectPanelContainer
                  name="Garden Party"
                  imageSource="/images/garden-party.jpg"
                  link="https://github.com/KBeKind/java-gard"
                />
              </div>
              {/* comment for help visual separation */}

              <div className="lg:flex">
                <ProjectPanelContainer
                  name="Resoled"
                  imageSource="/images/resoled-home.jpg"
                  link="https://github.com/KBeKind/resoled"
                />

                <ProjectPanelContainer
                  name="Garden Party"
                  imageSource="/images/garden-party.jpg"
                  link="https://github.com/KBeKind/java-gard"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4">
          <hr className="sm:m-5" />
          <div className="m-4 p-4">
            <p className="text-3xl mb-5">Certifications</p>
            <CertificationsHolder />
          </div>
        </div>
      </div>
    </>
  );
}
