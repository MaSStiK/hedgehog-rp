import { atom } from "jotai"
import axios from "axios"

// Информация о новой серии Ежиных хроник
export const homeAsideVideoData = atom({
    status: "idle", // idle | loading | success | error
    data: null
})

export const loadHomeAsideVideoAtom = atom(null, async (get, set) => {
    const current = get(homeAsideVideoData)

    // Отменяем попытку повторной загрузки
    if (current.status === "loading") return

    set(homeAsideVideoData, { status: "loading", data: null })

    try {
        const res = await axios.get("https://tv.hedgehog-rp.ru/api/episodes/")
        const data = res.data
        
        if (data.success) {
            set(homeAsideVideoData, { status: "success", data: data.episode })
        } else {
            set(homeAsideVideoData, { status: "error", data: null })
        }
    } catch {
        set(homeAsideVideoData, { status: "error", data: null })
    }
})