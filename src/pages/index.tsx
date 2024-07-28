import Link from "next/link";


export default function Home() {
  return (
    <Content />
  );
}


function Content() {
  return(
    <div>
      <nav>
        <Link href={'/auth/login'}>Click me to login</Link>
      </nav>
    </div>
  )
}