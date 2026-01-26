import { Provider } from "jotai"

export default function JotaiProvider({ children }) {
    return (
        <Provider>
            {children}
        </Provider>
    )
}