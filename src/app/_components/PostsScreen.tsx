'use client'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useContext, useState } from "react";
import { Blocks } from "react-loader-spinner";
import Card from "./Card";
import { PostContext } from "~/lib/providers/PostProvider";
import Modal from "./Modal";
import SearchSection from "./SearchSection";
import CardDetails from "./CardDetails";



const PostsScreen:React.FC = () => {


    const {posts, length} = useContext (PostContext)
    const [paginationSkip, setPaginationSkip] = useState (10)
    const [paginationStart, setPaginationStart] = useState (0)
    const paginationSettings = [10, 20 ,30, 40, 50];
    const [searchKeyword, setKeyWord] = useState ('')

    

    const nextPage = () => {
        if (paginationStart + paginationSkip < (length ?? 0))
            setPaginationStart (paginationStart + paginationSkip);
    }

    const prevPage = () => {
        if (paginationStart - paginationSkip >= 0)
            setPaginationStart (paginationStart - paginationSkip);
    }

   

   
    return (<main className='flex w-full h-full justify-center items-center'>
        <div className="flex gap-4 justify-center items-start flex-col w-[70%]">
        <div className="flex justify-between items-center w-full">
            <h1 className="text-[25px] text-darkNavy">Popular Posts</h1>
        <Modal cardModal={false} value={"Search Posts"} variant="btn-link">
            <SearchSection posts={posts ?? []}/>
        </Modal>
        </div>
        <div className='flex gap-2 flex-col pr-4 pl-2 py-2  justify-start items-start max-w-[70%] min-h-[60vh] max-h-[60vh] overflow-y-auto'>

{posts ?
posts?.map ((item:Post, index:number)=> {
    if (index >= paginationStart && index < (paginationStart + paginationSkip))
        return <Card post={item} />
})
: ''}
</div>
<div className='flex  w-full justify-between items-center'>
<div className='flex gap-4 justify-center items-center'>
    <button className="primary-btn" onClick={prevPage}>prev</button>
    <button className="primary-btn" onClick={nextPage}>next</button>
</div>

<div className='flex gap-4 '>
<label>Items per page:</label>
<select>
    {paginationSettings.map ((settings:number, index:number) => {
        return <option onClick={() => {
            setPaginationSkip (settings)
            setPaginationStart (0)
        }}>
            {settings}
        </option>
    })}
</select>
</div>
</div>
    </div>
    </main>)
}

export default PostsScreen