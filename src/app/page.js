"use client"
import { useContext, useEffect } from "react"
import { AsideContext } from "@/components/AsideContext"
import Link from "next/link"
import Image from "next/image"
import HomeAside from "@/components/Home/HomeAside"
import UIButton from "@/components/UI/UIButton/UIButton"

import "@/components/Home/Home.css"

export default function Home() {
     const { setAside, setAsideLoading } = useContext(AsideContext)
    useEffect(() => {
        setAside(HomeAside)
        setAsideLoading(false)
    }, [])

    return (
        <>
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
        </>
    );
}
