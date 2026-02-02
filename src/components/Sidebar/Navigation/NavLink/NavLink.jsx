import Link from "next/link"
import clsx from "clsx"
import "./NavLink.css"

export default function NavLink({ href, isActive=false, title, icon: Icon }) {
    return (
        <li>
            <Link href={href} className={clsx("nav-link", { "active": isActive })} >
                <span className="nav-link__sign">{isActive ? ">" : "•"}</span>
                <Icon size={16} />
                <span className="text-light fs-small">{title}</span>
            </Link>
        </li>
    )
}
