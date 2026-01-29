import TopBarClient from "./TopBarClient"

const servers = [
    "platform-01-a3f9c",
    "platform-02-7b1e4",
    "platform-03-7f9c8",
    "platform-04-c82d1",
    "platform-05-e4a77",
]

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function TopBar() {
    const _server = servers[randomInt(0, servers.length - 1)]
    const server = `hedgehog-community@${_server}:~$`
    const pid = String(randomInt(1, 200)).padStart(3, "0")
    const uptimeStartAt = "2026-01-27T00:00:00+03:00" // Старт сайта
    const timeStartAt = Date.now() // Старт времени

    return <TopBarClient server={server} pid={pid} uptimeStartAt={uptimeStartAt} timeStartAt={timeStartAt} />
}