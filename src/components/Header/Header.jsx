import Link from "next/link"
import Image from "next/image"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <Link href="/" className="flex-row header-logo text-white text-decoration-none">
                <Image
                        src="/assets/logotype.png"
                        alt="Hedgehog-RP logotype"
                        width={52}
                        height={52}
                        draggable={false}
                        priority
                    />
                <p className="fs-xlarge fw-bold">Ежиное РП</p>
            </Link>
        </header>
    )
}
