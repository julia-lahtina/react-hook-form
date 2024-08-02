import { Loader } from "@/components/loader/loader";
import { useGetPublicPostsQuery } from "@/services/inctagram.service";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  return (
    <Content />
  );
}


function Content() {
  const { pageSize, setPageSize } = useState(4)
  const { data, isLoading, isError } = useGetPublicPostsQuery()

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Some error is occurred</div>
  }


  return (
    <div>
      <nav>
        <Link href={'/auth/login'}>Click me to login</Link>
      </nav>
      <select value={pageSize} onChange={(e) => setPageSize(Number.parseInt(e.target.value, 10))}>
        <option value={4}>4</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <div>
        {data?.items?.map(post => {
          return (
            <div key={post.id}>
              <img src={post.images[0].url} />
              <div>
                <img src={post.avatarOwner} />
                <div>{post.userName}</div>
              </div>
              <div><time>{new Date(post.createdAt).toLocaleDateString()}</time></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}