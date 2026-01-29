"use client"
import { useEffect, useState } from "react"
import moment from "moment"
import "./TopBar.css"

// todo: Поставить timestamp и с его начала отсчитывать сколько существует сайт
// todo: Брать локальное время

function formatUptime(uptimeStartAt) {
    const start = moment(uptimeStartAt)
    const duration = moment.duration(moment().add(1, "second").diff(start))
    const days = Math.floor(duration.asDays())
    const hours = duration.hours()
    return `${days}d ${hours}h`
}

export default function TopBarClient({ server, pid, uptimeStartAt, timeStartAt }) {
    // Форматируем дату запуска сервера
    const [uptime, setUptime] = useState(() => formatUptime(uptimeStartAt))

    // Изначально берем время с сервера, далее уже берем актуальное время при обновлениях
    const [time, setTime] = useState(() => moment(timeStartAt).format("HH:mm:ss"))


    useEffect(() => {
        // обновляем uptime + локальное время раз в секунду
        const interval = setInterval(() => {
            setUptime(formatUptime(uptimeStartAt))
            setTime(moment().add(1, "second").format("HH:mm:ss"))
        }, 1000)

        return () => clearInterval(interval)
    }, [uptimeStartAt])
  
    return (
        <div className="flex-row top-bar">
            <div className="flex-row gap-4">
                <span className="text-green fs-tiny">●</span>
                <span className="text-green fs-tiny top-bar__server">{server}</span>
                <span className="text-dark fs-tiny">v2.0.0</span>
                <span className="text-dark fs-tiny">|</span>
                <span className="text-gray fs-tiny top-bar__pid">pid: {pid}</span>
            </div>
            <div className="flex-row gap-4">
                <span className="text-gray fs-tiny">uptime: {uptime}</span>
                <span className="text-gray fs-tiny">{time}</span>
            </div>
        </div>
    )
}
