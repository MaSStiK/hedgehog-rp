"use client"
import { createContext, useState, useEffect, Fragment } from "react"
import { usePathname } from "next/navigation"

export const AsideContext = createContext({
    asideJSX: null,
    setAside: () => {},
    asideLoading: false,
    setAsideLoading: () => {}
})

export function AsideProvider({ children }) {
    const pathname = usePathname()
    const asideRoutes = ["/", "/news"] // "/user", "/country"
    const hasAside = asideRoutes.some(p => p === "/" ? pathname === "/" : pathname.startsWith(p))

    const [asideJSX, setAside] = useState(null)
    const [asideLoading, setAsideLoading] = useState(hasAside)

    useEffect(() => {
        console.log(pathname);
        console.log(hasAside);
        if (!hasAside) {
            setAside(null)
        }
    }, [pathname, hasAside])

    return (
        <AsideContext.Provider value={{ asideJSX, setAside, asideLoading, setAsideLoading }}>
            <Fragment key={pathname}>
                {children}
            </Fragment>
        </AsideContext.Provider>
    )
}
