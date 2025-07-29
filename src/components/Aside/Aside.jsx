"use client"
import { useContext } from "react"
import { DataContext } from "@/components/Context"
import Link from "next/link"
import Image from "next/image"
import "./Aside.css"

export default function Aside({ children }) {
    const { Aside } = useContext(DataContext)
    console.log(Aside);
    

    if (!Aside || (Array.isArray(Aside) && Aside.length === 0)) {
        return null
    }

    return (
        <div id="aside-wrapper">
            <aside>
                {Aside}
            </aside>
        </div>
    )
}
