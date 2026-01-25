import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import "./NavLink.css"

export default function NavLink({ href, isActive=false, title, icon }) {
    return (
        <li>
            <Link href={href} className={clsx("nav-link", { "active": isActive })} >
                <Image
                    src={icon}
                    alt={title}
                    width={24}
                    height={24}
                />
                <p className="text-light">{title}</p>
            </Link>
        </li>
    )
}
