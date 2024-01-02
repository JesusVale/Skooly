import { montserrat } from '@/fonts'

export default async function Home({children}: {children: React.ReactNode}) {
    
  return (
    <html>
       <body className={`${montserrat.className} bg-primary`}>
            {children}
        </body> 
    </html>
  )
}
