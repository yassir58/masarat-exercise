




type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    profileImage: string | null;
    createAt: string;
    updateAt: string;
}



type Post = {
    id:number,
    title:string,
    userId:number,
    body:string
}

type Posts = Post[]

type PostContext = {
    posts?:Post[]
    setPosts?: (posts: Post[]) => void
    length?: number
    setDataLength?: (len:number) => void
}