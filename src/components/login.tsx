'use client'
import InputAuth from "./controls/input-auth"
import AuthOptions from "./auth-options"
import AuthHeader from "./auth-header"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation';
import Link from "next/link"

function Login() {

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignInEmail = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {email, password} = Object.fromEntries(formData);

    const {data, error} = await supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    })
    router.refresh();

  }

  return (
    <div className="h-screen grid place-content-center text-center max-[490px]:px-4 max-[490px]:w-full">
      <AuthHeader title="Iniciar Sesión" />

      <form className="flex gap-5 flex-col" onSubmit={handleSignInEmail}>
        <InputAuth type="email" name="email" placeholder="Email" />
        <InputAuth type="password" name="password" placeholder="Contraseña" />
        <button className="bg-[#3F5259] p-2 text-white transition hover:cursor-pointer hover:bg-[#39494f] max-[490px]:p-1 max-[490px]:text-sm">Ingresar</button>
      </form>

      <AuthOptions />

      <p className="text-white mt-6 max-[280px]:text-sm">
        ¿No tienes cuenta? <Link className="text-blue-600 hover:underline" href="/signup">Registrate</Link>
      </p>

    </div>
    
  )
}

export default Login