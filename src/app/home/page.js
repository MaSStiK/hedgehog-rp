import Image from "next/image"
import Aside from "@/components/Aside/Aside"
import HomeAside from "@/components/Aside/Home/HomeAside"
import Button from "@/components/UI/Button/Button"
import "@/app/home/home-page.css"

export default function Home() {
    return (
        <>
            <article>
                <Image
                    className="home__ace-attorney"
                    src="/assets/home/Ace-Attorney.png"
                    alt="Ace-Attorney"
                    width={875}
                    height={180}
                    draggable={false}
                />
                <section className="flex-col">
                    <h1 className="visually-hidden">Ежиное РП - ролевая онлайн-платформа</h1>
                    <h2>Добро пожаловать на сайт Ежиного РП</h2>
                    <p>Ежиное РП — это творческое ролевое сообщество единомышленников, объединённых желанием совместно создавать и развивать собственный мир. Участники сообщества пишут его историю, формируют государства, управляют экономикой, армией и политикой, участвуют в глобальных событиях и вместе формируют общий сюжет.</p>
                    <p>Проект объединяет работу с историей, литературой, искусством и картографией, превращая совместное творчество в целостную и живую вселенную, где вклад каждого участника имеет значение.</p>
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
            </article>

            <Aside layout={<HomeAside/>} />
        </>
    );
}
