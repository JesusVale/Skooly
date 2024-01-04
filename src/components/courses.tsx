import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { Course } from './types';
import { TeacherIcon } from './icons';
import Link from 'next/link';
import { SettingsIcon, UsersIcon } from './icons';

async function Courses() {
    const supabase = createServerComponentClient({cookies});
    const {data: {session}} = await supabase.auth.getSession();

    const coursesFilter = session?.user?.user_metadata.type === "teacher"? "teacher" : "courseclassmates.profile_id";

    const response = await supabase.from("courses").select("*, teacher( first_name ), courseclassmates!inner( * )").eq(coursesFilter, session?.user?.id);

    const courses = response.data; 

    return (
    <section className='flex gap-4 responsive-grid'>
        {
            courses?.map(course =>(
                <article className='text-white' key={course.id.toString()}>
                    <div className='w-full grid grid-rows-2 h-56 border-all-light-white rounded-md'>
                        <Link href={`/courses/${course.id}`} className={`${course.color} text-white p-3 rounded-t-md flex flex-col justify-between`}>
                            <h3 className='font-bold text-2xl'>{course.name}</h3>
                            <p className='text-sm'>{`${course.description.slice(0, 300)}...`}</p>
                            <div className='flex gap-2 items-center'>
                                <TeacherIcon width='20' height='20' />
                                <span className='text-md'>{`Mtro. ${course.teacher.first_name}`}</span>
                            </div>
                        </Link>
                        <div className='flex justify-end items-end gap-2 p-2'>
                            <Link href={`/courses/${course.id}`} className='hover-primary p-1'>
                                <UsersIcon width='32' height='32' />
                            </Link>
                            <Link href={`/courses/${course.id}/settings`} className='hover-primary p-1'>
                                <SettingsIcon width='32' height='32' />
                            </Link>
                        </div>
                    </div>
                </article>
            ))
        }
    </section>
    )
}

export default Courses