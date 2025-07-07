"use client"
import Image from "next/image"
import clsx from "clsx";

import "./UIButton.css"

// Пример использования
/* <UIButton
    src="/assets/image.png"
    alt="button-test"
    className=""
    text="text"
    title="title"
/> */

// Кнопка с картинкой, но так же есть возможность отобразить текст после картинки
export default function UIButton({
    id,
    className="",
    style,
    type="button",
    title,
    onClick,
    src,
    alt,
    text,
    small,
    round,
    width100,
    atStart,
    phoneTextHide,
    disabled
}) {
    // Добавляем стиль-модификатор перед передаваемыми классами
    const classes = clsx(
        "ui-button",
        {
            "ui-button_small": small, // Маленький
            "ui-button_round": round, // Скругленные углы
            "ui-button_width100": width100, // Кнопка во всю ширину
            "ui-button_atStart": atStart, // Контент кнопки в начале
            "ui-button_phoneTextHide": phoneTextHide, // Текст кнопки скрывается на телефоне
        },
        className
    );

    return (
        <button
            id={id} 
            className={classes}
            style={style}
            type={type}
            title={title}
            onClick={onClick} 
            disabled={disabled}
        >
            {src && <Image src={src} alt={alt || "button-image"} width={24} height={24} draggable="false" />}
            {text && <p>{text}</p>}
        </button>
    )
}