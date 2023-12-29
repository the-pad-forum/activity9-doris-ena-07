import Posts from "../components/Posts/Posts";

export default function Page() {
    return (
        <div className="container mx-auto flex flex-col space-y-7">
            <h2 className='text-white font-bold text-center text-[50px] pt-2 mt-4'>Posts</h2>
            
            <Posts />
        </div>
    );
}