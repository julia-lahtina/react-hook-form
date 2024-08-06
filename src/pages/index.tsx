import { Loader } from "@/components/loader/loader";
import { useGetPublicPostsQuery } from "@/services/inctagram.service";
import Link from "next/link";
import { useState } from "react";
import ReactTimeAgo from "react-time-ago";


export default function Home() {
  return (
    <Content />
  );
}


function Content() {
  const [pageSize, setPageSize] = useState(4)
  const { data, isLoading, isError } = useGetPublicPostsQuery({
    pageSize
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Some error is occurred</div>
  }

  const avatarPlaceholder = 'https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg'

  return (
    <div>
      <nav>
        <Link href={'/auth/login'}>Click me to login</Link>
      </nav>
      <select value={pageSize} onChange={(e) => setPageSize(Number.parseInt(e.target.value))}>
        <option value={4}>4</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '24px', gap: '12px' }}>
        {data?.items?.map(post => {
          return (
            <div key={post.id} style={{ width: '234px', height: '391px' }}>
              <img style={{ width: '300px', height: '300px', objectFit: 'cover' }} src={post.images[0]?.url} />
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center', marginTop: '12px' }}>
                <img style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} src={post.avatarOwner ?? avatarPlaceholder} />
                <div>{post.userName}</div>
              </div>
              <div>
                <ReactTimeAgo date={new Date(post.createdAt)} style={{ marginTop: '12px', fontSize: '15px', color: 'grey' }} />
                {/* <time>{new Date(post.createdAt).toLocaleDateString('ru-RU')}</time> */}
              </div>
              {post.description && <p style={{ marginTop: '3px' }}>{post.description}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}