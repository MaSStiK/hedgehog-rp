import { montserrat, _metadata, _viewport } from "@/components/metadata"
import Header from "@/components/Header/Header"
import Sidebar from "@/components/Sidebar/Sidebar"

import "@/app/styles/style.css"
import "@/app/styles/layout/app.css"
// import "@/app/styles/layout/app-phone.css"

export const metadata = _metadata
export const viewport = _viewport

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={montserrat.className}>
                <Header />
                <div id="layout">
                    <Sidebar />
                    <main>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
