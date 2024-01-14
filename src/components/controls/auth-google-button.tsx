
import { GoogleIcon } from "../icons"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

function AuthGoogleButton() {

  const supabase = createClientComponentClient();

  const signInGoogle = async () =>{
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/auth/callback'
        }
    })
  }

  return (
    <button onClick={signInGoogle} className="flex items-center gap-5 bg-white py-[0.6rem] text-black font-medium px-4 rounded-full hover:bg-gray-200 w-full max-[490px]:px-3 max-[490px]:text-sm max-[490px]:gap-3">
        <GoogleIcon width="25" height="25" /> Iniciar Sesión con Google
    </button>
  )
}

export default AuthGoogleButton