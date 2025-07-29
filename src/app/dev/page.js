"use client"
import { useContext, useEffect } from "react"
import { DataContext } from "@/components/Context"
import UIButton from "@/components/UI/UIButton/UIButton"

export default function Dev() {
    const Context = useContext(DataContext)
    
    return (
        <section className="flex-col">
            <UIButton
                text="Обычная"
            />
            <UIButton
                className="green"
                text="Зеленая"
            />
            <UIButton
                className="red"
                text="Красная"
            />
            <UIButton
                className="tp"
                text="Прозрачная"
            />
        </section>
    )
}
