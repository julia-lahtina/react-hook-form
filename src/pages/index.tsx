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