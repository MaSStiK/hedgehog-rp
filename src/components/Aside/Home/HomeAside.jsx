import Button from "@/components/UI/Button/Button"
import SeriesLinkout from "./SeriesLinkout";

export default function HomeAside() {
    return (
        <>
            <SeriesLinkout />
            <hr className="dark" />
            <section>
                <div className="flex-row flex-wrap">
                    <Button
                        className="tp"
                        src="/assets/home/vk.svg" alt="vk"
                        text="Группа в ВК" title="Перейти к группе в ВК"
                        href="https://vk.com/hedgehogs_army"
                        small
                    />
                    <Button
                        className="tp"
                        src="/assets/home/youtube.svg" alt="youtube"
                        text="Канал на YouTube" title="Перейти к каналу на YouTube"
                        href="https://www.youtube.com/@hedgehogs_army"
                        small
                    />
                </div>
            </section>
        </>
    );
}
