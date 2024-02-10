'use client'
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const PostContext = createContext<PostContext> ({})


interface Props {
    
    children:React.ReactNode
}
const PostProvider:React.FC<Props> = ({children}) => {

    const [posts, setPosts] = useState<Posts> ([])
    const [dataLength, setDataLength] = useState (0)


    const fetchPosts = async () => {
        await axios.get ('http://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setPosts (res.data)
            setDataLength (res.data.length);
            console.log (res.data)})
        .catch ((error:unknown) => {
            console.log ('error', error)
        })
    }
    const {isLoading} = useQuery (['posts'], fetchPosts)
    return <PostContext.Provider value={{posts, setPosts, length:dataLength, setDataLength}}>
        {children}
    </PostContext.Provider>}


export default PostProvider