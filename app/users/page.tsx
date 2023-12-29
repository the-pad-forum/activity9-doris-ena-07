import Users from "../components/Users/Users";

export default function UsersPage() {
    return (
        <div className="container mx-auto flex flex-col space-y-7">
            <h2 className='text-white font-bold text-center text-[50px]'>Users</h2>

            <Users />
        </div>
    )
}