import Navigation from "@/components/Sidebar/Navigation/Navigation"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            {/* Кнопка профиля */}
            <div className="flex-col gap-1 sidebar__text-info">
                <span className="text-green">$ ls /applications</span>
                <span className="text-dark fs-tiny">11 items</span>
            </div>
            <hr />
            <Navigation />
        </div>
    )
}
