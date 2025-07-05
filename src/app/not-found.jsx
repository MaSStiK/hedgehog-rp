import Link from "next/link"
import UIButton from "@/components/UI/UIButton/UIButton"

import "@/app/styles/Not-found.css"

export default function NotFound () {
    return (
        <div id="not-found">
            <big>404 Not Found</big>
            <h1>Страница не найдена!</h1>
            <Link href="/">
                <UIButton
                    src={"/svg/Home.svg"}
                    text={"На главную"}
                    width100
                />
            </Link>
        </div>
    )
}