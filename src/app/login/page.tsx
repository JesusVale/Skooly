import Login from "@/components/login";
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from "next/navigation";

async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {data: {session}} = await supabase.auth.getSession()
  
  if(session !== null){
    redirect("/");
  }
  return <Login />
}

export default Page;