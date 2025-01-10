import { useEffect, useLayoutEffect, useRef } from 'react'

const LayoutEffectExample = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useLayoutEffect(() => {
        console.log(inputRef.current?.value)
    }, [])

    useEffect(() => {
        inputRef.current!.value = "ESTHER"
    }, [])

  return (
    <div>
        <input type="text" ref={inputRef} value="pedrrppppppooopo" style={{width: 400, height: 200}} />
    </div>
  )
}

export default LayoutEffectExample