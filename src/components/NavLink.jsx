"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({children, href}) => {
    const pathName  = usePathname()
    const active = pathName === href
    return (
        <Link
        className={active ? 'border-b' :''}
        href={href}
        > {children}</Link>
    );
};

export default NavLink;