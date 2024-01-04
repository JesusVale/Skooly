import SidebarTab from './sidebar-tab';
import { HomeIcon, ClipIcon, CalendarIcon, TrophyIcon, SettingsIcon } from './icons';
import DropdownCoursesSS from './dropdown-courses-ss';

function Sidebar() {
  return (
    <aside className="text-white min-w-72 border-r border-solid border-light-white py-5 h-full">
        <nav className="flex flex-col gap-4 h-full justify-between">
            <div className="flex flex-col gap-4">
                <SidebarTab href="/"><HomeIcon width='30' height='30' /> Inicio</SidebarTab>
                <DropdownCoursesSS />
                <SidebarTab href="/"><ClipIcon width='30' height='30' /> Tareas Pendientes</SidebarTab>
                <SidebarTab href="/"><CalendarIcon width='30' height='30' /> Clases</SidebarTab>
                <SidebarTab href="/"><TrophyIcon width='30' height='30' /> Logros</SidebarTab>
            </div>
            <SidebarTab href="/"><SettingsIcon width='30' height='30' /> Ajustes</SidebarTab>
        </nav>
    </aside>
  )
}

export default Sidebar