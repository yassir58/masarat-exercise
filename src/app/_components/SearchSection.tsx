'use client'
import { useState } from "react"
import Card from "./Card"
interface Props {
    posts:Post[]
}
const SearchSection:React.FC<Props> = ({posts}) => {

    const [list, setList] = useState<Posts> ([])
    const [searchKeyword, setKeyWord] = useState ('')

    const filterPosts = (keyword:string) => {
        const temp = posts?.slice () ?? [];
        setKeyWord (keyword)
        const filtered = temp.filter (post => post.title.includes (keyword));
        setList (filtered)
    }
    return <div className='flex flex-col gap-4 justify-center items-center w-full h-full'>
        <input className="input-regular w-[80%]" value={searchKeyword} onChange={(e) => filterPosts (e.target.value)} placeholder="Search for post by keyword" />
        <div className='flex gap-2 flex-col justify-start items-start max-w-[70%] min-h-[60vh] max-h-[60vh] overflow-y-auto p-4'>

{list ?
list?.map ((item:Post, index:number)=> {
        return <Card post={item} key={index} />
})
: ''}
</div>
    </div>
}

export default SearchSection