import Link from 'next/link'
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Profile from "@/components/Profile";

const Navbar = () => {
    const { userId } = auth();
    return (
        <nav className="under-gradient p-1 pb-10 md:p-2 md:pb-10">
            <div className='navbar flex justify-between w-full rounded mb-2 px-2 py-2'>
                <div className="logo">
                    <Link href={"/"}>
                        <Image
                            src={"/logo.png"}
                            width={100}
                            height={50}
                            alt='logo_image'
                            className='logo_name'
                        />
                    </Link>
                </div>

                <div className='flex gap-6 items-center'>
                    {!userId ? (
                        <>
                            <Link href={"/sign-in"}>
                                <li>Login</li>
                            </Link>
                            <Link href={"/sign-up"}>
                                <li>Sign Up</li>
                            </Link>
                        </>) : (
                        <div className="flex flex-end items-center gap-4">
                            <div className="avatar flex items-center gap-3">

                                <div className="flex items-center">
                                    <UserButton />
                                </div>
                                <Image
                                    src={"/dropdown.png"}
                                    width={15}
                                    height={15}
                                    alt='dropdown'
                                    className='dropdown'
                                />
                            </div>

                            <div className="add_div">
                                <Image
                                    src={"/add.png"}
                                    width={15}
                                    height={15}
                                    alt='add'
                                    className='add'
                                />
                            </div>

                            <div className="button_idv">
                                <button className="btn">
                                    sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
          <Profile />
        </nav>
    )
}

export default Navbar