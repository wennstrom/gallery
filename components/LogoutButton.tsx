"use client"

import { logout } from "@/lib/auth/actions";

export function LogoutButton() {

    return (
        <button onClick={() => {logout()}}>Logout</button>
    )
}