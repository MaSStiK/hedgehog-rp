import Link from "next/link"
import Image from "next/image"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="flex-row header-logo">
                <Link href="/">
                    <Image
                        src="/assets/logotype.png"
                        alt="Hedgehog-RP logotype"
                        width={52}
                        height={52}
                        draggable={false}
                    />
                </Link>
                <h1>Hedgehog RP</h1>
            </div>
        </header>
    )
}
