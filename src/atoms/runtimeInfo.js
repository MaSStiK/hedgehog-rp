import { atom } from "jotai"

const servers = [
    "platform-01-a3f9c",
    "platform-02-7b1e4",
    "platform-03-7f9c8",
    "platform-04-c82d1",
    "platform-05-e4a77",
]

const PID_MIN = 1
const PID_MAX = 200

export const serverAtom = atom("hedgehog-community@platform-00-00000:~$")
export const pidAtom = atom("000")

// После отрисовки клиентского компонента Атом получит случайное значение 
export const initServerAtom = atom(null, (get, set) => {
    const server = servers[Math.floor(Math.random() * servers.length)]
    const pid = Math.floor(Math.random() * (PID_MAX - PID_MIN + 1)) + PID_MIN
    set(serverAtom, `hedgehog-community@${server}:~$`)
    set(pidAtom, String(pid).padStart(3, "0"))
})