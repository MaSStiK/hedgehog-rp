"use client"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink"
import "./Navigation.css"

// Вертикальный список ссылок на страницы платформы
export default function Navigation() {
    const pathname = usePathname()
    const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href)

    return (
        <nav>
            <ul>
                <NavLink href="/"           isActive={isActive("/")}           title="Главная"     icon="/svg/Home.svg" />
                <NavLink href="/news"       isActive={isActive("/news")}       title="Новости"     icon="/svg/News.svg" />
                <NavLink href="/user"       isActive={isActive("/user")}       title="Участники"   icon="/svg/User.svg" />
                <NavLink href="/country"    isActive={isActive("/country")}    title="Страны"      icon="/svg/Country.svg" />
                <NavLink href="https://map.hedgehog-rp.ru"                     title="Карта мира"  icon="/svg/Map.svg" />
                <NavLink href="https://tv.hedgehog-rp.ru"                      title="Ежиное ТВ"   icon="/svg/Video.svg" />
                <hr />
                <NavLink href="/tools"      isActive={isActive("/tools")}      title="Инструменты" icon="/svg/Tool.svg" />
                <NavLink href="/support"    isActive={isActive("/support")}    title="Помощь"      icon="/svg/Help.svg" />
                <NavLink href="/about"      isActive={isActive("/about")}      title="О нас"       icon="/svg/Info.svg" />
                <NavLink href="/settings"   isActive={isActive("/settings")}   title="Настройки"   icon="/svg/Settings.svg" />
                <NavLink href="/changelogs" isActive={isActive("/changelogs")} title="Обновления"  icon="/svg/Update.svg" />
                <NavLink href="/dev"        isActive={isActive("/dev")}        title="dev"         icon="/svg/Dev.svg" />
            </ul>
        </nav>
    )
}
