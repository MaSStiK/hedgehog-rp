"use client"
import Image from "next/image"
import { useAtomValue } from "jotai"
import { homeAsideVideoLoadableAtom } from "@/atoms/HomeAsideVideo"

export default function SeriesLinkout() {
    const video = useAtomValue(homeAsideVideoLoadableAtom)
    let content;

    if (video.state === "loading") {
        content = <p>Загрузка...</p>
    } else if (video.state === "hasError") {
        console.error(video.error)
        content = <p>Ошибка загрузки</p>
    } else {
        content = <Series data={video.data} />
    }

    return (
        <section className="flex-col">
            <h3>Ежиных&nbsp;хроники</h3>
            {content}
        </section>
    )
}

// Отображение последней серии
function Series({ data }) {
    return (
        <a href={data.href} className=" text-light text-decoration-none">
        <Image
            className="home__thumbnail"
            src={data.thumbnail} alt="thumbnail"
            width={292} height={164}
            draggable={false}
        />
            <p>{data.title}</p>
        </a>
    )
}