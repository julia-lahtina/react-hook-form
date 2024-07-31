import { useGetPublicPostsQuery } from "@/services/inctagram.service";
import Link from "next/link";


export default function Home() {
  return (
    <Content />
  );
}


function Content() {

  const { data, isLoading, isError } = useGetPublicPostsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Some error is occurred</div>
  }


  return (
    <div>
      <nav>
        <Link href={'/auth/login'}>Click me to login</Link>
      </nav>
      <div>
        {data?.}
      </div>
    </div>
  )
}