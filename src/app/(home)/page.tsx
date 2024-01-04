import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation";
import { cookies } from "next/headers"

export default async function Home({children}: {children: React.ReactNode}) {

  const supabase = createServerComponentClient({ cookies });
  const {data: {session}} = await supabase.auth.getSession()
  
  if(session === null){
    redirect("/login");
  }

  return (
    <>
      
    </>
  )
}
