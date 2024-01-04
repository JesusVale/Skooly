import Link from "next/link";

type Props = {
    children: React.ReactNode, 
    href: string
}

function SidebarTab({children, href}: Props) {

  return (
    <Link className="flex px-4 gap-2 py-2 items-center text-base font-semibold hover-primary" href={href}>{children}</Link>
  )
}

export default SidebarTab