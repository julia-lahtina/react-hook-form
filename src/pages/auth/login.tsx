import Head from "next/head";
import {useForm} from 'react-hook-form'

type LoginFields = {
    email: string
    password: string
    rememberMe: boolean
}

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFields>();

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return <>
        <Head>
            <title>Login | Instagram Client</title>
        </Head>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">E-Mail</label>
                <input id="email" type="email" {...register('email', {
                    pattern: emailRegex,
                    minLength: 1,
                    required: 'Email is required'
                })}/>
                {errors.email?.message && <div className="text-red-500">{errors.email?.message}</div>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...register('password', {
                    minLength: 3,
                    required: 'Password is required'
                })}/>
                {errors.password?.message && <p className="text-red-500">{errors.password?.message}</p>}
            </div> 
            <div>
                <label htmlFor="rememberMe">Remember Me</label>
                <input id="rememberMe" type="checkbox" {...register('rememberMe')}/>
            </div> 
            <button>Send</button>
    </form>
    </>
}