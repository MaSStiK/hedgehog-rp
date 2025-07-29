"use client"
import { useContext, useEffect } from "react"
import { AsideContext } from "@/components/AsideContext"
import Image from "next/image"
import NewsAside from "@/components/News/NewsAside"

import "@/components/Home/Home.css"

export default function News() {
     const { setAside, setAsideLoading } = useContext(AsideContext)
    useEffect(() => {
        setAside(NewsAside)
        setAsideLoading(false)
    }, [])

    return (
        <>
            <section>
                <h1>News</h1>
            </section>
        </>
    );
}
