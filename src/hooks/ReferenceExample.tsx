import { useRef } from "react"


const ReferenceExample = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    const onClick = () => {
        inputRef.current?.focus()
        console.log(inputRef.current?.value)
    }

  return (
    <div>
        <h1>David</h1>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default ReferenceExample