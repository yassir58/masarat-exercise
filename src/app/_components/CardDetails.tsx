import { useQuery } from "@tanstack/react-query";
import { countWords } from "~/lib/utils";
import axios from "axios";
import { useState } from "react";

interface props {
  post: Post;
}
const CardDetails: React.FC<props> = ({ post }) => {

    const [comments, setComments] = useState<PostComment[]> ([])
    const fetchComments = async () => {
        await axios.get (`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then (res=> {
            setComments (res.data)
            console.log (res.data)})
        .catch ((err: unknown) => console.log ('error : ', err));
    }
    const {data, isLoading} = useQuery (['comments'], fetchComments)
  return (
    <div className="flex w-full h-full gap-6 justify-start items-start flex-col px-6 py-4">
        <h1 className='text-[23px] text-darkNavy'>Post Details</h1>

        <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex flex-col gap-5 max-w-[500px]">
        <h1 className="text-[26px] font-semibold text-darkNavy">
          {post.title}
        </h1>
        <p className="text-mediumGray">{post.body}</p>
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <p className="text-mediumGray">
          <span className="font-semibold text-darkNavy">id:</span> {post.id}
        </p>
        <p className="text-mediumGray">
          <span className="font-semibold text-darkNavy">userId:</span> {post.id}
        </p>
        <p className="text-mediumGray">
          <span className="font-semibold text-darkNavy">words:</span>{" "}
          {countWords(post.body)}
        </p>
      </div>

     
    </div>
    <h1 className='text-[23px] text-darkNavy'>Post Comments</h1>

    <div className='flex flex-col gap-4 justify-start items-start'>
{comments.map ((comment, index)=>{
    return <div className="flex flex-col gap-3 justify-start items-start">
        <h2 className="text-darkNavy">{comment?.name}</h2>
        <p className='text-mainPurple'>{comment?.email}</p>
        <p className='text-mediumGray'>{comment?.body}</p>
        </div>
})}
</div>
    </div>
  );
};


export default CardDetails

