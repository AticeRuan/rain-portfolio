"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = ({link}) => {

  const pathName=usePathname()  

  return (
    <Link href={link.url} className={`rounded p-1 ${pathName===link.url&&"bg-black text-white"}`}>
        {link.title}
    </Link>
  )
}

export default NavLink