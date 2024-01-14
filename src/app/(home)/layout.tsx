import MainNavbar from '@/components/main-navbar';
import SidebarSS from '@/components/sidebar-ss';
import { ShowSidebarProvider } from '@/context/showSidebar';


export default async function Home({children}: {children: React.ReactNode}) {
    
  return (
    <div className='flex h-full flex-col'>
      <ShowSidebarProvider>
        <MainNavbar />
        <div className="flex-1 flex">
          <SidebarSS />
          <main className='p-8 w-full'>
            {children}
          </main>
        </div>
      </ShowSidebarProvider>
      
    </div>   
  )
}
