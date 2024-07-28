import Head from "next/head";
import Link from "next/link";

export default function Login() {
    return <div>
        <Head>
            <title>Login | Instagram Client</title>
        </Head>
        <div>
            <Link href={'/'}>Home</Link>
        </div>
    </div>
}