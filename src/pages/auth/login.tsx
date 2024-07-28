import { CheckboxZod } from "@/components/checkbox";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import {useForm} from 'react-hook-form'
import {z} from 'zod'


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.string(),
})

type LoginFields = z.infer<typeof loginSchema>

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFields>({
        resolver: zodResolver(loginSchema)
    });

    console.log(errors)
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
                <Input id="email" type="email" {...register('email')}/>
                {errors.email?.message && <p style={{color: 'red'}}>{errors.email?.message}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Input id="password" type="password" {...register('password')}/>
                {errors.password?.message && <p style={{color: 'red'}}>{errors.password?.message}</p>}
            </div> 
            <div>
                <label htmlFor="rememberMe">Remember Me</label>
                <CheckboxZod id="rememberMe" {...register('rememberMe')}/>
            </div> 
            <button>Send</button>
    </form>
    </>
}