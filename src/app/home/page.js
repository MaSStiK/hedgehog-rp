import Image from "next/image"
import Aside from "@/components/Aside/Aside"
import HomeAside from "@/app/home/HomeAside"
import UIButton from "@/components/UI/UIButton/UIButton"
import "@/app/home/Home.css"

export default function Home() {
    return (
        <>
            <article>
                <Image
                    className="home__ace-attorney"
                    src="/assets/home/Ace-Attorney.png"
                    alt="Ace-Attorney"
                    width={875}
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
                    <h2>Обновления на сайте</h2>
                    {/* Обновления */}
                </section>
            </article>

            <Aside layout={<HomeAside/>} />
        </>
    );
}
