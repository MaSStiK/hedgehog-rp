import Header from "@/components/Header/Header"
import Navigation from "@/components/Navigation/Navigation"
import Aside from "@/components/Aside/Aside"

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Navigation />
                <div id="content">
                    <article>
                        {children}
                    </article>
                    <Aside />
                </div>
            </main>
        </>
    );
}
