import NavLink from "./NavLink"

import "./Navigation.css"

const links = [
    {href: "/", title: "Главная", icon: "/svg/Home.svg"},
    {href: "/news", title: "Новости", icon: "/svg/News.svg"},
    {href: "/user", title: "Участники", icon: "/svg/User.svg"},
    {href: "/country", title: "Страны", icon: "/svg/Country.svg"},
    {href: "https://map.hedgehog-rp.ru", title: "Карта мира", icon: "/svg/Map.svg"},
    {href: "https://tv.hedgehog-rp.ru", title: "Ежиное ТВ", icon: "/svg/Video.svg"},
    {href: "/tools", title: "Инструменты", icon: "/svg/Tool.svg"},
    {href: "/support", title: "Помощь", icon: "/svg/Help.svg"},
    {href: "/about", title: "О нас", icon: "/svg/Info.svg"},
    {href: "/settings", title: "Настройки", icon: "/svg/Settings.svg"},
    {href: "/changelogs", title: "Обновления", icon: "/svg/Update.svg"},
]

export default function Navigation() {
    return (
        <nav>
            <ul>
                <NavLink href="/" title="Главная" icon="/svg/Home.svg" />
                <NavLink href="/news" title="Новости" icon="/svg/News.svg" />
                <NavLink href="/user" title="Участники" icon="/svg/User.svg" />
                <NavLink href="/country" title="Страны" icon="/svg/Country.svg" />
                <NavLink href="https://map.hedgehog-rp.ru" title="Карта мира" icon="/svg/Map.svg" />
                <NavLink href="https://tv.hedgehog-rp.ru" title="Ежиное ТВ" icon="/svg/Video.svg" />
                <hr />
                <NavLink href="/tools" title="Инструменты" icon="/svg/Tool.svg" />
                <NavLink href="/support" title="Помощь" icon="/svg/Help.svg" />
                <NavLink href="/about" title="О нас" icon="/svg/Info.svg" />
                <NavLink href="/settings" title="Настройки" icon="/svg/Settings.svg" />
                <NavLink href="/changelogs" title="Обновления" icon="/svg/Update.svg" />
                <NavLink href="/dev" title="dev" icon="/svg/Dev.svg" />
            </ul>
        </nav>
    )
}
