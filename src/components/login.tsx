'use client'
import { SkoolyLogo } from "./icons"
import InputAuth from "./controls/input-auth"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter, redirect } from 'next/navigation';

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
    if(error){
      console.log(error);
    } else{
      router.push("/")
    }
    
  }

  return (
    <div className="h-screen grid place-content-center text-center">
        <header>
          <div className="mb-1 text-white">
            <div className="flex justify-center">
              <SkoolyLogo width="300" height="90" />
            </div>
            <p className="font-semibold">Construyendo puentes hacia el conocimiento</p>
          </div>
          <h1 className="text-white font-bold text-2xl py-5">Iniciar Sesión</h1>
          
      </header>

      <form className="flex gap-5 flex-col" onSubmit={handleSignInEmail}>
        <InputAuth type="email" name="email" placeholder="Email" />
        <InputAuth type="password" name="password" placeholder="Contraseña" />
        <button className="bg-[#3F5259] p-2 text-white transition hover:cursor-pointer hover:bg-[#39494f]">Ingresar</button>
      </form>

    </div>
    
  )
}

export default Login