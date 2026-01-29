"use client"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink/NavLink"
import { 
    Home,
    Newspaper,
    Users,
    Globe,
    Map,
    Tv,
    Wrench,
    HelpCircle,
    Info,
    Settings,
    Download,
    Code
} from "lucide-react"

import "./Navigation.css"

// Вертикальный список ссылок на страницы платформы
export default function Navigation() {
    const pathname = usePathname()
    const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href)

    return (
        <nav>
            <ul className="flex-col gap-1">
                <NavLink href="/"           isActive={isActive("/")}           title="/главная"     icon={Home} />
                <NavLink href="/news"       isActive={isActive("/news")}       title="/новости"     icon={Newspaper} />
                <NavLink href="/user"       isActive={isActive("/user")}       title="/участники"   icon={Users} />
                <NavLink href="/country"    isActive={isActive("/country")}    title="/страны"      icon={Globe} />
                <NavLink href="https://map.hedgehog-rp.ru"                     title="/карта мира"  icon={Map} />
                <NavLink href="/tools"      isActive={isActive("/utils")}      title="/инструменты" icon={Wrench} />
                <NavLink href="/support"    isActive={isActive("/support")}    title="/помощь"      icon={HelpCircle} />
                <NavLink href="/about"      isActive={isActive("/about")}      title="/о нас"       icon={Info} />
                <NavLink href="https://tv.hedgehog-rp.ru"                      title="#ежиное-тв ↗"   icon={Tv} />
                <hr />
                <NavLink href="/settings"   isActive={isActive("/settings")}   title="/настройки"   icon={Settings} />
                <NavLink href="/changelogs" isActive={isActive("/changelogs")} title="/обновления"  icon={Download} />
                <NavLink href="/dev"        isActive={isActive("/dev")}        title="/dev"         icon={Code} />
            </ul>
        </nav>
    )
}
