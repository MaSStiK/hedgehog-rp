"use client"
import dynamic from "next/dynamic"
import Button from "@/components/UI/Button/Button"

const SeriesLinkout = dynamic(
    () => import("./SeriesLinkout"),
    { ssr: false, loading: () => <HomeAsideLoading /> }
)

// Отображаем загрузку пока грузится компонент
function HomeAsideLoading() {
    return (
        <section className="flex-col">
            <h3>Ежиных&nbsp;хроники</h3>
            <p>Загрузка...</p>
        </section>
    )
}

export default function HomeAside() {
    return (
        <>
            <SeriesLinkout />
            <hr className="dark" />
            <section>
                <div className="flex-row flex-wrap">
                    <Button
                        className="tp"
                        icon="/assets/social-networks/VK.svg"
                        text="Группа в ВК" title="Перейти к группе в ВК"
                        href="https://vk.com/hedgehogs_army"
                        small
                    />
                    <Button
                        className="tp"
                        icon="/assets/social-networks/Youtube.svg"
                        text="Канал на YouTube" title="Перейти к каналу на YouTube"
                        href="https://www.youtube.com/@hedgehogs_army"
                        small
                    />
                </div>
            </section>
        </>
    );
}
