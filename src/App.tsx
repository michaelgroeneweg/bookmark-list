import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-4 m-w-[50rem] w-[50rem]">
        <header className="bg-gray-300 dark:bg-gray-700 p-6 rounded">test</header>
        <article className="bg-gray-300 dark:bg-gray-700 p-6 rounded">
            test
        </article>
    </div>
  )
}

export default App
