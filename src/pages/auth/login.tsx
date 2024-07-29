import { Input } from "@/components/input";
import { FormCheckbox } from "@/form/Form-Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { useForm } from "react-hook-form";
import {z} from 'zod'


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean(),
})

type LoginFields = z.infer<typeof loginSchema>


export default function Login() {

    const {control, register, handleSubmit, formState: {errors}} = useForm<LoginFields>({
        resolver: zodResolver(loginSchema),
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
                <Input type="email" {...register('email')} label={'Email'} errorMessage={errors.email?.message}/>
                <Input type="password" {...register('password')} label={'Password'} errorMessage={errors.password?.message}/>
            <div>
                <label htmlFor="rememberMe">Remember Me</label>
                <FormCheckbox id={'rememberMe'} control={control} name={'rememberMe'}/>
            </div> 
            <button>Send</button>
    </form>
    </>
}