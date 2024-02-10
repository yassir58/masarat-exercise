import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PostsScreen from "./_components/PostsScreen";
import PostProvider from "~/lib/providers/PostProvider";

export default async function Home() {
  
  const session = await getServerSession ();

  if (!session?.user)
    redirect ('/login')
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center flex-col gap-8">
      <p className='p-4 text-darkNavy text-[22px]'>
        Welcome  <span className='text-mainPurple font-semibold'>{session?.user?.name}</span>
      </p>
     <PostProvider>
        <PostsScreen/>
     </PostProvider>
    </div>
  );
}
