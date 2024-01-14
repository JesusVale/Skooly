'use client'
import SidebarTab from './sidebar-tab';
import { HomeIcon, ClipIcon, CalendarIcon, TrophyIcon, SettingsIcon } from './icons';
import { useEffect, useRef } from 'react';
import useShowSidebar from '@/hooks/useShowSidebar';

function SidebarCS({children}: {children: React.ReactNode}) {

  const {showSidebar, setShowSidebar} = useShowSidebar()
  const sidebarRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef, setShowSidebar]);

  return (
    <div className={`max-[900px]:transition max-[900px]:duration-300 ${showSidebar? " max-[900px]:modal-background" : ""}`}>
      <aside className={`text-white relative bg-primary w-72 border-r border-solid border-light-white py-5 h-full max-[900px]:absolute max-[900px]:top-0 max-[900px]:bottom-0 max-[900px]:transition-transform ${showSidebar? " max-[900px]:translate-x-0" : " max-[900px]:translate-x-[-100%]"}`} ref={sidebarRef}>
        <nav className="flex flex-col gap-4 h-full justify-between">
            <div className="flex flex-col gap-4">
                <SidebarTab href="/"><HomeIcon width='30' height='30' /> Inicio</SidebarTab>
                {children}
                <SidebarTab href="/"><ClipIcon width='30' height='30' /> Tareas Pendientes</SidebarTab>
                <SidebarTab href="/"><CalendarIcon width='30' height='30' /> Clases</SidebarTab>
                <SidebarTab href="/"><TrophyIcon width='30' height='30' /> Logros</SidebarTab>
            </div>
            <SidebarTab href="/"><SettingsIcon width='30' height='30' /> Ajustes</SidebarTab>
        </nav>
      </aside>
    </div>
  )
}

export default SidebarCS;