import { montserrat } from '@/fonts'
import MainNavbar from '@/components/main-navbar';

export default async function Home({children}: {children: React.ReactNode}) {
    
  return (
    <html>
       <body className={`${montserrat.className} bg-primary`}>
          <MainNavbar />
          
          {children}
        </body> 
    </html>
  )
}
