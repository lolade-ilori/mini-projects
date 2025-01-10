import axios from 'axios'
import  { useEffect, useMemo, useState } from 'react'


type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string
}

const MemoExample = () => {
    const [data, setData] = useState<Comment[]>([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((resposne) => {
            setData(resposne.data)
        })
    }, [])

    const findLongestName = (comments: Comment[]) => {
        if(!comments) return null

        let longestName = ""
        for(let i = 0; i < comments.length; i++) {
            const currentName = comments[i].name
            if(currentName.length > longestName.length) {
                longestName = currentName
            }
        }

        console.log("THIS WAS COMPUTED")

        return longestName
    }

    // Memoization
    const getLongestName = useMemo(() => findLongestName(data), [data])

  return (
    <div>
        <div>{getLongestName}</div>

        <button onClick={() => {setToggle((prev) => !prev)}}>Toggle</button>

        {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default MemoExample