import NavigationLink from "./NavigationLink"

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
        <aside>
            <ul>
                <NavigationLink href="/" title="Главная" icon="/svg/Home.svg" />
                <NavigationLink href="/news" title="Новости" icon="/svg/News.svg" />
                <NavigationLink href="/user" title="Участники" icon="/svg/User.svg" />
                <NavigationLink href="/country" title="Страны" icon="/svg/Country.svg" />
                <NavigationLink href="https://map.hedgehog-rp.ru" title="Карта мира" icon="/svg/Map.svg" />
                <NavigationLink href="https://tv.hedgehog-rp.ru" title="Ежиное ТВ" icon="/svg/Video.svg" />
                <hr />
                <NavigationLink href="/tools" title="Инструменты" icon="/svg/Tool.svg" />
                <NavigationLink href="/support" title="Помощь" icon="/svg/Help.svg" />
                <NavigationLink href="/about" title="О нас" icon="/svg/Info.svg" />
                <NavigationLink href="/settings" title="Настройки" icon="/svg/Settings.svg" />
                <NavigationLink href="/changelogs" title="Обновления" icon="/svg/Update.svg" />
            </ul>
        </aside>
    )
}
