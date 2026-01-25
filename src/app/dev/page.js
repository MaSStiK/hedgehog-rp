"use client"
import { useContext } from "react"
import { DataContext } from "@/components/Context"
import UIButton from "@/components/UI/UIButton/UIButton"

const text = `This is a test text used for checking layout, typography, and content placement.
It has no specific meaning and is intended solely for demonstration purposes.
Designers and developers often use such text to preview how real content will appear in an interface or document.`

const text2 = `This is a test text used for checking layout, typography, and content placement.`

export default function Dev() {
    const Context = useContext(DataContext)
    
    return (
        <article>
            <section className="flex-col">
                <div className="flex-row">
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
                </div>

                <input type="text" placeholder="placeholder" />
                <input type="text" value="read only" readOnly />
                <input type="text" value="disabled" disabled />
                <textarea placeholder="placeholder" maxLength={100}></textarea>
                <p className="textarea">{text}</p>
                <textarea readOnly value={text2}></textarea>
            </section>
        </article>
    )
}
