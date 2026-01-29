import { atom } from "jotai"
import { loadable } from "jotai/utils"
import axios from "axios"

// Информация о последней доступной серии Ежиных хроник
const homeAsideVideoAtom = atom(async () => {
    const res = await axios.get("https://tv.hedgehog-rp.ru/api/last-episode/")
    return res.data
})

export const homeAsideVideoLoadableAtom = loadable(homeAsideVideoAtom)