"use client"
import Link from "next/link"
import Button from "@/components/UI/Button/Button"

const text = `p textarea
This is a test text used for checking layout, typography, and content placement.
It has no specific meaning and is intended solely for demonstration purposes.
Designers and developers often use such text to preview how real content will appear in an interface or document.`

const text2 = `readOnly This is a test text.`

export default function Dev() {
    return (
        <article>
            <section className="flex-col">
                <div className="flex-row">
                    <Button
                        text="Gray Button" title="Gray Button"
                    />
                    <Button
                        className="green"
                        text="Green Button" title="Green Button"
                    />
                    <Button
                        className="red"
                        text="Red Button" title="Red Button"
                    />
                    <Button
                        className="tp"
                        text="Transparent Button" title="Transparent Button"
                    />
                </div>

                <hr />

                <div className="flex-row">
                    <Button
                        text="UI Button link" title="Button link"
                        href="#"
                    />
                    <Link className="button" href="#">button link</Link>
                    <button className="fit">fit content</button>
                </div>

                <hr />

                <p>default text</p>
                <Link href="#" className="text-link">default link</Link>
                <p className="fs-xxlarge">fs-xxlarge</p>
                <p className="fs-xlarge">fs-xlarge</p>
                <p className="fs-large ">fs-large </p>
                <p className="fs-medium">fs-medium</p>
                <p className="fs-small">fs-small</p>

                <hr />

                <input type="text" placeholder="default input" />
                <input type="text" className="error" placeholder="error input" />
                <input type="text" value="read only" readOnly />
                <input type="text" value="disabled" disabled />
                <textarea placeholder="default textarea" maxLength={100}></textarea>
                <p className="textarea">{text}</p>
                <textarea readOnly value={text2}></textarea>
            </section>
        </article>
    )
}
