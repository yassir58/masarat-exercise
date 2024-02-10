
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { countWords } from "~/lib/utils"
import axios from "axios"
import toast from "react-hot-toast"
import { useContext } from "react"
import { PostContext } from "~/lib/providers/PostProvider"
import Modal from "./Modal"
import CardDetails from "./CardDetails"
interface CardProps {
    post:Post
}
const Card:React.FC<CardProps> = ({post}) => {

    const {posts, setPosts}     = useContext (PostContext)

    const deletePost = (id:number) => {
        const  temp = posts?.slice ();
        const filtered = temp?.filter (post => post.id != id) ?? [];
        setPosts?.(filtered);      
        toast.success ('Post Deleted Successfully');
    }
    return (<div className='flex flex-col justify-start items-start active:ring-2 active:ring-mainPurple focus:ring-2 focus:ring-mainPurple hover:ring-2 hover:ring-mainPurple w-[650px] gap-4 shadow-sm rounded-md p-4'>
        <h1 className='text-[20px] text-veryDarkGray'>{post.title}</h1>
        <div className='flex justify-between items-center w-full'>
        <div className='flex justify-start items-center gap-6'>
            <p className="text-mediumGray"><span className='font-semibold text-darkNavy'>id:</span> {post.id}</p>
            <p className="text-mediumGray"><span className='font-semibold text-darkNavy'>userId:</span> {post.id}</p>
            <p className="text-mediumGray"><span className='font-semibold text-darkNavy'>words:</span> {countWords (post.body)}</p>
        </div>

       <div className="flex gap-4 justify-center items-center">
       <button className='button-danger' onClick={()=> {
            deletePost (post.id)
        }}>delete</button>
        <Modal cardModal={false} value={"See Details"} variant="btn-link">
            <CardDetails post={post} />
        </Modal>
       </div>
        </div>
    </div>)
}

export default Card