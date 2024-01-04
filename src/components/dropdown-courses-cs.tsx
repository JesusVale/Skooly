'use client'
import { Course } from "./types";
import { CoursesIcon, DropdownIcon } from "./icons";
import SidebarTab from "./sidebar-tab";
import { useState } from "react";
import { colorsCourses } from "./constants";

type Props = {
  courses: Course[]
}

function DropdownCoursesCS({ courses }: Props) {

  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <div>
      <button onClick={() => setOpenDropdown(!openDropdown)} className="flex w-full px-4 gap-2 py-2 items-center text-base font-semibold hover-primary">
        <DropdownIcon open={openDropdown} /> <CoursesIcon width="30" height="30" /> Cursos
      </button>

      <div className={`flex flex-col ${openDropdown? "":"hidden"}`}>
        {
          courses?.length === 0 || courses === null ? <div className="px-4">No tienes cursos</div> :
          courses?.map(course => (
            <SidebarTab key={course.id.toString()} href={`/courses/${course.id}`}>
              <div className={`w-8 h-8 flex justify-center items-center rounded-[50%] p-1 ${course.color}`}>{course.name[0]}</div>
              <span className="font-bold">{course.name}</span>
            </SidebarTab>
          ))
        }
      </div>
      
      

    </div>
  )
}

export default DropdownCoursesCS;