"use client"
import { useContext } from "react"
import { DataContext } from "@/components/Context"
import Link from "next/link"
import Image from "next/image"
import "./Aside.css"

export default function Aside() {
    const Context = useContext(DataContext)
    console.log(Context.Aside);

    if (Array.isArray(Context.Aside) && Context.Aside.length === 0) {
        return (<></>)
    } else if (!Context.Aside) {
        return (<></>)
    } else {
        return (
            <div id="aside-wrapper">
                <aside>
                    {Context.Aside}
                </aside>
            </div>
        )
    }

}
