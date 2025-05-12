"use client"

import Link from "next/link"

export function UploadButton() {
    return (
        <Link href="/post" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Upload</Link>
    )
}