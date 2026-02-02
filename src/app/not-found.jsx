import Image from "next/image"
import Button from "@/components/UI/Button/Button"
import { Home } from "lucide-react"

import "@/app/styles/layout/not-found.css"

export default function NotFound() {
    return (
        <div id="not-found">
            <h1 className="visually-hidden">Страница не найдена</h1>
            <div className="not-found__top flex-row">
                <span className="fw-bold">4</span>
                <Image
                    src="/assets/not-found/not-found.webp"
                    alt="hedgehog"
                    width={128}
                    height={128}
                />
                <span className="fw-bold">4</span>
            </div>
            <p className="text-center fs-xlarge fw-bold">Упс...<br/>Мы не нашли такую страницу</p>
            <Button
                icon={Home}
                text={"На главную"}
                href="/"
                width100
            />
        </div>
    )
}