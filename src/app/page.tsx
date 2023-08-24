import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-bl from-sky-500 to-sky-950 p-4">
        <div className="m-4">
          <p className="text-5xl mx-4 my-3">Kyle Riebeling</p>
          <p className="text-3xl mx-4 my-3">KBeKind</p>
        </div>
        <hr className="m-5" />
        <div className="text-justify w-full md:w-5/6 lg:w-3/4 xl:w-1/2 md:m-4 p-4 me-8 ms-3 my-2 flex">
          <p className="">
            Software developer with a passion for learning, creating and
            connecting with others. Eager to work with a skilled development
            team to produce high quality code for robust applications.
            Experience with full-stack development, working cooperatively on a
            management team, and completing complex projects within the scope of
            assigned deadlines.
          </p>
        </div>

        <div className="mx-6 xl:flex xl:mx-0 group grid m:justify-center xl:justify-center justify-none m:mx-3">
          <Link
            href="https://github.com/KBeKind"
            target="_blank"
            className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
          >
            Github: github.com/KBeKind
          </Link>
          <Link
            href="https://www.linkedin.com/in/kyle-riebeling/"
            target="_blank"
            className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
          >
            Linkedin: linkedin.com/in/kyle-riebeling
          </Link>
          <Link
            href="https://www.hackerrank.com/KBeKind"
            target="_blank"
            className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-500 to-sky-800 text-white duration-300 group-hover:bg-sky-800"
          >
            HackerRank: hackerrank.com/KBeKind
          </Link>
        </div>
      </div>
      {/* <hr className="mx-8 my-4" /> */}

      <div className="m-4 p-4">
        <p>Certificates</p>
      </div>
      <hr className="mx-8 my-4" />

      <div className="m-4 p-4">
        <p className="text-3xl mb-4">Recent Projects</p>
        <div className="lg:flex group/1">
          <div className="relative group w-full lg:w-1/2 bg-sky-700 justify-center duration-500 hover:!scale-105 lg:group-hover/1:scale-90 hover:rounded lg:group-hover/1:m-4 hover:mb-8 hover:mt-8">
            <div className="absolute -inset-1 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-500"></div>
            <div className="relative px-1 py-1 leading-none flex items-top justify-center space-x-6">
              <div className="bg-sky-700 rounded h-full p-4">
                <Link href="/resoled" className="m-2">
                  Resoled
                </Link>
                <img
                  src="/images/resoled-home.jpg"
                  alt="ReSoled Home Page"
                  className="m-2"
                />
              </div>
            </div>
          </div>

          <div className="relative group w-full lg:w-1/2 bg-sky-700 justify-center duration-500 hover:!scale-105 lg:group-hover/1:scale-90 hover:rounded lg:group-hover/1:m-4 hover:mb-8 hover:mt-8 ">
            <div className="absolute -inset-1 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-500"></div>
            <div className="relative px-1 py-1  leading-none flex items-top justify-center space-x-6">
              <div className="bg-sky-700 rounded h-full p-4">
                <Link href="/gardenparty" className="m-2">
                  Garden Party
                </Link>
                <img
                  src="/images/garden-party.jpg"
                  alt="Garden Party Create a Plant Page"
                  className="m-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
