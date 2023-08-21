import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/new">New Page</Link>

      <h1>HI</h1>
      <p className="text-2xl">Kyle Riebeling KBeKind</p>
      <h3>Software Engineer</h3>

      <p>
        Software engineer with a passion for learning, creating and connecting
        with others. Eager to work with a skilled development team to produce
        high quality code for robust applications. Experience with full-stack
        development, working cooperatively on a management team, and completing
        complex projects within the scope of assigned deadlines.
      </p>

      <h3> Github: </h3>
      <h3>Linkedin: </h3>
      <h3>Certificates: </h3>
      <h3>HackerRank:</h3>
      <div>
        <h3>Resoled</h3>
        <Link href="/resoled">Resoled</Link>

        <h3>Garden Party</h3>
        <Link href="/gardenparty">Garden Party</Link>

        <h3>Kyle's Mystical Adventure</h3>
        <Link href="/adventure">Kyle's Mystical Adventure</Link>
      </div>
    </>
  );
}
