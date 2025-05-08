import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/LogoutButton";

export default async function Header() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <div className="p-4 border-b border-gray-700">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Gallery</h1>
                <div className="flex gap-4">
                    {user ? (
                        <LogoutButton />
                    ) : (
                        <a href="/login">Login</a>
                    )}
                </div>
            </div>
        </div>
    )
}
