import UIButton from "@/components/UI/UIButton/UIButton"

export default function page() {
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
