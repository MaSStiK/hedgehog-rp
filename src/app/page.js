// "use client"

import Link from "next/link"
import Image from "next/image"
import UIButton from "@/components/UI/UIButton/UIButton"

import "@/app/styles/Home.css"

export default function Home() {
    return (
        <>
            <Image
                className="home__ace-attorney"
                src="/assets/home/Ace-Attorney.png"
                alt="Ace-Attorney"
                width={640}
                height={0}
                draggable={false}
            />
            <section className="flex-col">
                <h1>Добро пожаловать на Ежиное РП</h1>
                {/* Календарь */}
            </section>

            <section className="flex-col">
                <h2>Последние новости</h2>
                {/* Новости */}
            </section>

            <section className="flex-col">
                <h2>Новое видео на Ежином&nbsp;ТВ</h2>
                <Link href="https://tv.hedgehog-rp.ru/watch/s4e14" target="_blank" rel="noopener noreferrer">
                    <Image
                        className="home__thumbnail"
                        src="/assets/home/video-thumbnail.png"
                        alt="thumbnail"
                        width={704}
                        height={396}
                        draggable={false}
                    />
                    <h3>4 сезон 14 серия | Предвоенный синдром</h3>
                </Link>
                
                <div className="flex-row flex-wrap">
                    <a href="https://vk.com/hedgehogs_army" target="_blank" rel="noopener noreferrer">
                        <UIButton
                            className="tp"
                            src="/assets/home/vk.svg"
                            alt="vk"
                            text="Группа в ВК"
                            title="Перейти к группе в ВК"
                        />
                    </a>
                    <a href="https://www.youtube.com/@hedgehogs_army" target="_blank" rel="noopener noreferrer">
                        <UIButton
                            className="tp"
                            src="/assets/home/youtube.svg"
                            alt="youtube"
                            text="Канал на YouTube"
                            title="Перейти к каналу на YouTube"
                        />
                    </a>
                </div>
            </section>

            <section className="flex-col">
                <h2>Обновления на сайте</h2>
                {/* Обновления */}
            </section>
        </>
    );
}
