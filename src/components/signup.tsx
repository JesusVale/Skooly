'use client'
import { StudentIcon, TeacherIcon } from "./icons"
import InputAuth from "./controls/input-auth"
import AuthHeader from "./auth-header"
import AuthOptions from "./auth-options"
import Link from "next/link"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from "next/navigation"

function Signup() {

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const {first_name, last_name, email, password, typeUser: type} = Object.fromEntries(formData);

    const { data, error } = await supabase.auth.signUp({
        email: email as string,
        password: password as string,
        options: {
            data: {
                first_name,
                last_name,
                type
            }
        },
    });

    if(data){
        router.push("/verification-pending")
    }

  }

  return (
    <div className="h-screen grid place-content-center text-center">
        <AuthHeader title="Registrarse" />

        <div>
            <form className="flex gap-5 flex-col" onSubmit={handleOnSubmit}>

                <div className="flex gap-2">

                    <label htmlFor="student" className="bg-white grow">
                        <input type="radio" id="student" value="student" name="typeUser" className="opacity-0 absolute" defaultChecked />
                        <div className="flex gap-1 p-2 font-medium hover:cursor-pointer hover:bg-slate-700 hover:text-white type-selector">
                            <StudentIcon width="20" height="20" /> Soy Estudiante
                        </div>
                    </label>

                    <label htmlFor="teacher" className="bg-white grow">
                        <input type="radio" id="teacher" value="teacher" name="typeUser" className="opacity-0 absolute" />
                        <div className="flex gap-1 p-2 font-medium hover:cursor-pointer hover:bg-slate-700 hover:text-white type-selector">
                            <TeacherIcon width="20" height="20" /> Soy Maestro
                        </div>
                    </label>

                </div>

                <InputAuth type="text" name="first_name" placeholder="Nombres" />
                <InputAuth type="text" name="last_name" placeholder="Apellidos" />
                <InputAuth type="email" name="email" placeholder="Email" />
                <InputAuth type="password" name="password" placeholder="Contraseña" />
                <button className="bg-[#3F5259] p-2 text-white transition hover:cursor-pointer hover:bg-[#39494f]">Registrarse</button>

            </form>

            <AuthOptions />

            <p className="text-white mt-6">
                ¿Ya tienes una cuenta? <Link className="text-blue-600 hover:underline" href="/login">Iniciar Sesión</Link>
            </p>
        </div>
    </div>
    
  )
}

export default Signup