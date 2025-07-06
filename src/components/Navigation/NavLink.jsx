"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function NavLink({ href, title, icon }) {
    const pathname = usePathname()
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)

    return (
        <li>
            <Link
                href={href}
                className={clsx("nav-link", { "active": isActive })}
            >
                <Image
                    src={icon}
                    width={24}
                    height={24}
                    alt={title}
                />
                <p className="text-light">
                    {title}
                </p>
            </Link>
        </li>
    )
}
