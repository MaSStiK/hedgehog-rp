import { Montserrat } from "next/font/google"
import Header from "@/components/Header/Header"
import Navigation from "@/components/Navigation/Navigation"

import "@/app/styles/style.css"
import "@/app/styles/app.css"
// import "@/app/styles/app-phone.css"

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
    style: ["normal","italic"],
    display: "swap"
})

export const metadata = {
    title: "Главная | Ежиное-RP",
    description: "Создай свою страну и развивай её в соответствии со своими желаниями и интересами!",
    themeColor: "#1B1A1F",

    icons: {
        // Основной .ico
        icon: [
            { url: "/favicon.ico", rel: "icon" },
            { url: "/favicon-16x16.png", sizes: "16x16", rel: "icon" },
            { url: "/favicon-32x32.png", sizes: "32x32", rel: "icon" }
        ],
        // iOS
        apple: [
            { url: "/favicon-120x120.png", sizes: "120x120", rel: "apple-touch-icon" },
            { url: "/favicon-152x152.png", sizes: "152x152", rel: "apple-touch-icon" },
            { url: "/favicon-180x180.png", sizes: "180x180", rel: "apple-touch-icon" }
        ],
        // PWA/Android maskable
        other: [
            { rel: "mask-icon", url: "/favicon-192x192.png", color: "#1B1A1F" }
        ]
    },
    manifest: "/site.webmanifest",

    // 2) Open Graph
    openGraph: {
        title: "Главная | Ежиное-RP",
        description: "Создай свою страну и развивай её в соответствии со своими желаниями и интересами!",
        url: "https://hedgehog-rp.ru",
        siteName: "Ежиное-RP",
        images: ["/faviconOG.png"],
        type: "website"
    },

    // Twitter Cards
    twitter: {
        card: "summary_large_image",
        title: "Главная | Ежиное-RP",
        description: "Создай свою страну и развивай её в соответствии со своими желаниями и интересами!",
        images: ["/faviconOG.png"],
        // site: "@your_twitter_handle",
        // creator: "@your_twitter_handle"
    },

    // Канонический URL
    alternates: {
        canonical: "https://hedgehog-rp.ru",
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },

    // Локализация (если будут мультиязычные версии)
    // metadata.i18n или через alternates.languages

    authors: [{ name: "MaSStiK", url: "https://hedgehog-rp.ru/about" }],
    keywords: [
        "RP",
        "roleplay",
        "ролевые игры",
        "онлайн ролевая игра",
        "политическая ролевая игра",
        "игра про политику",
        "политический симулятор",
        "создание миров",
        "worldbuilding",
        "альтернативная история",
        "интерактивный сюжет",
        "социальная стратегия",
        "творческое сообщество",
        "онлайн-сообщество",
        "user-generated content",
        "творческое сотрудничество",
        "симулятор страны",
        "альтернативная реальность",
        "сценарии ролевых игр",
        "игры с открытым сюжетом"
    ],
    verification: {
        // Яндекс-метрика, Google Search Console и т.п.
        // google: "YOUR_GOOGLE_VERIFICATION_CODE",
        // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={montserrat.className}>
                <Header />
                <main>
                    <Navigation />
                    <article>
                        {children}
                    </article>
                </main>
            </body>
        </html>
    );
}
