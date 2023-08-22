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
      <div className="mx-6 xl:flex xl:mx-0">
        <Link href="https://github.com/KBeKind" target="_blank">
          <button className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:bg-sky-700 text-white">
            Github: github.com/KBeKind
          </button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/kyle-riebeling/"
          target="_blank"
        >
          <button className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:bg-sky-700 text-white">
            Linkedin: linkedin.com/in/kyle-riebeling
          </button>
        </Link>

        <Link href="https://www.hackerrank.com/KBeKind" target="_blank">
          <button className="m-4 p-4 border-2 shadow-xl w-96 flex-none text-center hover:bg-sky-700 text-white">
            HackerRank: hackerrank.com/KBeKind
          </button>
        </Link>
      </div>
      <hr className="mx-8 my-4" />

      <div className="m-4 p-4">
        <p>Certificates</p>
      </div>
      <hr className="mx-8 my-4" />

      <div className="m-4 p-4">
        <p className="text-3xl mb-4">Recent Projects</p>
        <div className="lg:flex">
          <div className="m-4 p-4 w-full lg:w-1/2 bg-sky-800 rounded-xl shadow-xl justify-center">
            <Link href="/resoled">Resoled</Link>
            <img src="/images/resoled-home.jpg" alt="ReSoled Home Page" />
          </div>

          <div className="m-4 p-4 w-full lg:w-1/2 bg-sky-800 rounded-xl shadow-xl justify-center">
            <Link href="/gardenparty">Garden Party</Link>
            <img
              src="/images/garden-party.jpg"
              alt="Garden Party Create a Plant Page"
            />
          </div>
        </div>
      </div>
    </>
  );
}
