"use client"
import { useEffect } from "react"
import Image from "next/image"
import { useAtomValue, useSetAtom } from "jotai"
import { homeAsideVideoData, loadHomeAsideVideoAtom } from "@/atoms/homeAside"

export default function SeriesLinkout() {
    const loadVideoData = useSetAtom(loadHomeAsideVideoAtom)
    const videoData = useAtomValue(homeAsideVideoData)
    let content;

    // Запускаем поиск при первой отрисовке
    useEffect(() => {
        loadVideoData()
    }, [loadVideoData])

    if (videoData.status === "idle" || videoData.status === "loading") {
        content = <p>Загрузка...</p>
    } else if (videoData.status === "error") {
        content = <p>Ошибка загрузки</p>
    } else if (videoData.status === "success") {
        content = <Series data={videoData.data} />
    } else {
        content = <p>Ошибка videoData.status "{videoData.status}"</p>
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