import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import DropdownCoursesCS from './dropdown-courses-cs';
import { Course } from './types';

async function DropdownCoursesSS() {

    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession();

    const coursesFilter = session?.user?.user_metadata.type === "teacher"? "teacher" : "courseclassmates.profile_id";

    const { data: courses } = await supabase.from("courses").select("*, courseclassmates!inner( * )").eq(coursesFilter, session?.user?.id)

    return <DropdownCoursesCS courses={courses as Course[]} />
}

export default DropdownCoursesSS