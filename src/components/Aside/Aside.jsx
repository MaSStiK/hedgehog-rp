import "./Aside.css"

export default function Aside({ layout }) {
    return (
        <div id="aside-wrapper">
            <aside>
                {layout}
            </aside>
        </div>
    )
}