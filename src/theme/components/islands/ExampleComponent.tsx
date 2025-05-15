import { useState } from "react"

export default function ExampleComponent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Example Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}