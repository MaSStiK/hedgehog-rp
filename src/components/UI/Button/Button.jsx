import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import "./Button.css"

// Пример использования
/* <Button
    src="/assets/image.png"
    alt="button-test"
    className=""
    text="text"
    title="title"
/> */

// Кнопка с картинкой, но так же есть возможность отобразить текст после картинки
export default function Button({
    id, className="", style,
    text, // Текст кнопки
    title, // Заголовок при наведении

    // Пропсы только для кнопки
    onClick, // Функция при клике
    type="button", // Роль кнопки: button, submit и тд.

    // Пропсы только для ссылки
    href, target, rel, 

    // Пропсы для отображения картинки
    icon, alt="button-image", color="#FFFFFF",
    
    // Модификаторы кнопки
    small,
    round,
    width100,
    atStart,
    phoneTextHide,
    disabled,
}) {
    // Добавляем стиль-модификатор перед передаваемыми классами
    const classes = clsx(
        "button ui-button",
        {
            "button--small": small, // Маленькая кнопка
            "button--round": round, // Скругленные углы
            "button--width100": width100, // Кнопка во всю ширину
            "button--atStart": atStart, // Контент кнопки в начале
            "button--phoneTextHide": phoneTextHide, // Текст кнопки скрывается на телефоне
        },
        className
    );

    const commonProps = { id, className: classes, style, title }

    const Icon = typeof icon === "object" ? icon : null // Если в icon передаем иконку из "lucide-react" - отображаем его как компонент
    const src = typeof icon === "string" ? icon : null // Если в icon передаем ссылку на картинку - отображаем как Image src
    const content = (
        <>
            {Icon && <Icon size={16} color={color} />}
            {src && <Image src={src} alt={alt} width={16} height={16} />}
            {text && <span>{text}</span>}
        </>
    )


    // Если прокинута ссылка - то возвращаем ссылку с классом кнопки
    if (href) {
        // Если ссылка внешняя - возвращаем просто тег a
        if (href.startsWith("http")) {
            return (
                <a {...commonProps}
                    aria-disabled={disabled}
                    href={href}
                    target={target || "_blank"}
                    rel={rel || "noopener noreferrer"}
                >
                    {content}
                </a>
            )
        }

        // Если внутренняя ссылка
        return (
            <Link {...commonProps}
                aria-disabled={disabled}
                href={href}
            >
                {content}
            </Link>
        )
    }

    // Если обычная кнопка
    return (
        <button {...commonProps}
            type={type}
            onClick={onClick} 
            disabled={disabled}
        >
            {content}
        </button>
    )
}