export function UploadModal() {
    return (
        <form className="flex flex-col gap-4"> 
            <input type="text" placeholder="Title" name="title" className="border border-gray-300 rounded-md p-2" />
            <input type="file" name="file" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Upload</button>
        </form>
    )
}