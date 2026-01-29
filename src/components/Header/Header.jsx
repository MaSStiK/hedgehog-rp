import Link from "next/link"
import Image from "next/image"
import TopBar from "./TopBar/TopBar"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <TopBar />
            <div className="header__content">
                <Link href="/" className="flex-row text-white text-decoration-none header__content-logo">
                    <Image
                        src="/assets/logotype.png"
                        alt="Hedgehog-RP logotype"
                        width={52}
                        height={52}
                        draggable={false}
                        priority
                    />
                    <div className="flex-col gap-1">
                        <span className="text-orange header__content-title">$ ./hedgehog-rp</span>
                        <span className="text-dark fs-small">Сообщество пользователей Ежиного РП</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}
