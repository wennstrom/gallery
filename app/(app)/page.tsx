import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {data: user} = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: posts, error } = await supabase
  .from('posts')
  .select();  

  if (error) {
    redirect("/error");
  }

  return (
    <div className="flex mt-5 gap-3">
      {posts?.map((post) => (
        <div key={post.title} className="flex flex-col p-2 border-1 border-gray-300 rounded-md text-center">
          <Link href={`/post/${post.id}`}>
            <Image 
              src={post.url} 
              alt={post.title}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              />
              <span className="text-gray-500 my-2">{post.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
