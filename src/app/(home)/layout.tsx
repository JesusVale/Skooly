import { montserrat } from '@/fonts'
import MainNavbar from '@/components/main-navbar';
import Sidebar from '@/components/sidebar';

export default async function Home({children}: {children: React.ReactNode}) {
    
  return (
    <div className='flex h-full flex-col'>
      <MainNavbar />
      <div className="flex-1 flex">
        <Sidebar />
        <main className='p-8 w-full'>
          {children}
        </main>
      </div>
    </div>   
  )
}
