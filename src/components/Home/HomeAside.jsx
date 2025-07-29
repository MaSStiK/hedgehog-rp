import Link from "next/link"
import Image from "next/image"
import UIButton from "@/components/UI/UIButton/UIButton"

export default function HomeAside() {
    return (
        <>
            <section className="flex-col">
                <h4>Новое видео на Ежином&nbsp;ТВ</h4>
                <Link href="https://tv.hedgehog-rp.ru/watch/s4e14" target="_blank" rel="noopener noreferrer">
                    <Image
                        className="home__thumbnail"
                        src="/assets/home/video-thumbnail.png"
                        alt="thumbnail"
                        width={292}
                        height={164}
                        draggable={false}
                    />
                    <p>4 сезон 14 серия | Предвоенный синдром</p>
                </Link>
                
            </section>
            <hr />
            <section>
                <div className="flex-row flex-wrap">
                    <a href="https://vk.com/hedgehogs_army" target="_blank" rel="noopener noreferrer">
                        <UIButton
                            className="tp"
                            src="/assets/home/vk.svg"
                            alt="vk"
                            text="Группа в ВК"
                            title="Перейти к группе в ВК"
                            small
                        />
                    </a>
                    <a href="https://www.youtube.com/@hedgehogs_army" target="_blank" rel="noopener noreferrer">
                        <UIButton
                            className="tp"
                            src="/assets/home/youtube.svg"
                            alt="youtube"
                            text="Канал на YouTube"
                            title="Перейти к каналу на YouTube"
                            small
                        />
                    </a>
                </div>
            </section>
        </>
    );
}
