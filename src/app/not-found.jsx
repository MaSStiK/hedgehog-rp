import Link from "next/link"
import Button from "@/components/UI/Button/Button"

import "@/app/styles/layout/not-found.css"

export default function NotFound() {
    return (
        <div id="not-found">
            <big>404 Not Found</big>
            <h1>Страница не найдена!</h1>
            <Link href="/">
                <Button
                    src={"/svg/Home.svg"}
                    text={"На главную"}
                    width100
                />
            </Link>
        </div>
    )
}