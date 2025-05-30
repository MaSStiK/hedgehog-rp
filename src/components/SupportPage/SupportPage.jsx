import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ButtonImage from "../ButtonImage/ButtonImage"
import { setPageTitle } from "../Global"

import imgInfo from "../../assets/svg/Info.svg"
import imgHelp from "../../assets/svg/Help.svg"

import "./SupportPage.css"

export default function SupportPage() {
    useEffect(() => {setPageTitle("Помощь")}, [])
    const Navigate = useNavigate()

    const articles = [
        {title: "Где оставить обратную связь (идеи или баги)", icon: imgHelp, link: "feedback"},
        {title: "Как использовать токен авторизации", icon: imgHelp, link: "auth-token"},
        {title: "История РП: Глава I - Кулсториробоб", icon: imgInfo, link: "rp_lore_chapter1"},
        {title: "История РП: Глава II - Лунная сторона Кулсториробоба", icon: imgInfo, link: "rp_lore_chapter2"},
        {title: "История РП: Глава III - Развязка", icon: imgInfo, link: "rp_lore_chapter3"},
        {title: "История РП: Глава IV - Планета Динахон Системы Базиликс", icon: imgInfo, link: "rp_lore_chapter4"},
        {title: "История РП: Глава V - Родной дом", icon: imgInfo, link: "rp_lore_chapter5"},
    ]

    return (
        <article>
            <h4 className="page-title">h/support</h4>

            <section className="flex-col">
                <h1>Статьи для решения проблем и вопросов</h1>
                {articles.map((article, i) => (
                    <ButtonImage
                        key={i}
                        src={article.icon}
                        text={article.title}
                        title={article.title}
                        width100
                        atStart
                        onClick={() => Navigate(article.link)}
                    />
                ))}
            </section>
        </article>
    )
}