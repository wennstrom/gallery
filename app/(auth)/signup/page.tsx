import { signup } from '@/lib/auth/actions'

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="card w-96 border border-gray-700 rounded-md p-4 shadow-md">
            <form className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" className="border border-gray-700 rounded-md p-2" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" className="border border-gray-7   00 rounded-md p-2" name="password" />
                <button formAction={signup} type="submit" className="bg-blue-500 text-white rounded-md p-2">Signup</button>
            </form> 
        </div>
    </div>
  );
}