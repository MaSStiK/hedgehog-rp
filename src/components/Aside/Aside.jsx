"use client"
import { useContext } from "react"
import { AsideContext } from "@/components/AsideContext"
import AsideLoading from "./AsideLoading"
import "./Aside.css"

export default function Aside() {
    const { asideJSX, asideLoading } = useContext(AsideContext)

    if (asideLoading) {
        console.log("loading");
        return <AsideLoading />
    }

    if (!asideLoading && asideJSX === null) {
        console.log("no data");
        return
    }

    console.log("render");
    return (
        <div id="aside-wrapper">
            <aside>
                {asideJSX}
            </aside>
        </div>
    )
}