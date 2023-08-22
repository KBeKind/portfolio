import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className="text-5xl mx-4 my-3">Kyle Riebeling KBeKind</p>
      <p className="text-3xl mx-4 my-3">Software Engineer</p>
      <hr className="m-4" />
      <div className="text-xl w-1/2 m-4 p-4">
        <p>
          Software engineer with a passion for learning, creating and connecting
          with others. Eager to work with a skilled development team to produce
          high quality code for robust applications. Experience with full-stack
          development, working cooperatively on a management team, and
          completing complex projects within the scope of assigned deadlines.
        </p>
      </div>
      <div className="flex">
        <div className="mx-4 p-4 border-2 shadow-xl">
          <Link href="https://github.com/KBeKind">
            Github: github.com/KBeKind
          </Link>
        </div>
        <div className="mx-4 p-4 border-2 shadow-xl">
          <Link href="https://www.linkedin.com/in/kyle-riebeling/">
            Linkedin: linkedin.com/in/kyle-riebeling
          </Link>
        </div>
        <div className="mx-4 p-4 border-2 shadow-xl">
          <Link href="https://www.hackerrank.com/KBeKind">
            HackerRank: hackerrank.com/KBeKind
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3>Certificates: </h3>
      </div>
      <div className="flex p-4 w-5/6">
        <div className="m-4 p-4 w-1/2 bg-sky-800 rounded-xl shadow-xl">
          <Link href="/resoled">Resoled</Link>
          <img src="/images/resoled-home.jpg" alt="ReSoled Home Page" />
        </div>

        <div className="m-4 p-4 w-1/2 bg-sky-800 rounded-xl shadow-xl">
          <Link href="/gardenparty">Garden Party</Link>
          <img
            src="/images/garden-party.jpg"
            alt="Garden Party Create a Plant Page"
          />
        </div>
      </div>
    </>
  );
}
