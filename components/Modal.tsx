'use client'
 
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react';

 
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
 
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white z-100 p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="flex text-2xl font-bold text-center ">Upload</h1>
          <button
            className="flex px-3 py-1 rounded hover:bg-gray-300 my-auto cursor-pointer ba"
            onClick={() => {
              router.back()
            }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}