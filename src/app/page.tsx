import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="m-4">
        <p className="text-5xl mx-4 my-3">Kyle Riebeling</p>
        <p className="text-3xl mx-4 my-3">KBeKind</p>
      </div>
      <hr className="m-5" />
      <div className="text-justify w-full md:w-5/6 lg:w-3/4 xl:w-1/2 m-4 p-4 flex">
        <p className="">
          Software developer with a passion for learning, creating and
          connecting with others. Eager to work with a skilled development team
          to produce high quality code for robust applications. Experience with
          full-stack development, working cooperatively on a management team,
          and completing complex projects within the scope of assigned
          deadlines.
        </p>
      </div>
      <div className="">
        <br />
      </div>

      <div className="">
        <br />
      </div>
      <div className="mx-6 xl:flex xl:mx-0 group">
        <Link
          href="https://github.com/KBeKind"
          target="_blank"
          className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-600 to-sky-900 text-white duration-300 group-hover:bg-sky-900"
        >
          Github: github.com/KBeKind
        </Link>
        <Link
          href="https://www.linkedin.com/in/kyle-riebeling/"
          target="_blank"
          className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-600 to-sky-900 text-white duration-300 group-hover:bg-sky-900"
        >
          Linkedin: linkedin.com/in/kyle-riebeling
        </Link>
        <Link
          href="https://www.hackerrank.com/KBeKind"
          target="_blank"
          className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:!bg-gradient-to-b from-sky-600 to-sky-900 text-white duration-300 group-hover:bg-sky-900"
        >
          HackerRank: hackerrank.com/KBeKind
        </Link>
      </div>

      <hr className="mx-8 my-4" />

      <div className="m-4 p-4">
        <p>Certificates</p>
      </div>
      <hr className="mx-8 my-4" />

      <div className="m-4 p-4">
        <p className="text-3xl mb-4">Recent Projects</p>
        <div className="lg:flex group/1">
          <div className="relative group w-full lg:w-1/2 bg-sky-950 justify-center duration-500 lg:hover:!scale-110 lg:group-hover/1:scale-90 lg:group-hover/1:m-4 ">
            <div className="absolute -inset-1 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-500"></div>
            <div className="relative px-1 py-1 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6">
              <div className="bg-sky-700 h-full p-4">
                <Link href="/resoled">Resoled</Link>
                <img src="/images/resoled-home.jpg" alt="ReSoled Home Page" />
              </div>
            </div>
          </div>

          <div className="relative group w-full lg:w-1/2 bg-sky-950 justify-center duration-500 lg:hover:!scale-110 lg:group-hover/1:scale-90 lg:group-hover/1:m-4 ">
            <div className="absolute -inset-1 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-00"></div>
            <div className="relative px-1 py-1  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6">
              <div className="bg-sky-700 h-full p-4">
                <Link href="/gardenparty">Garden Party</Link>
                <img
                  src="/images/garden-party.jpg"
                  alt="Garden Party Create a Plant Page"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
