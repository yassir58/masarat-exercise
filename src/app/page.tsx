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
      <p>
        Welcome To Home Page
      </p>
     <PostProvider>
        <PostsScreen/>
     </PostProvider>
    </div>
  );
}
