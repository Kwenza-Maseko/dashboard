import Link from 'next/link'
import { auth } from "@clerk/nextjs/server";
import { SignOutButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { dark } from '@clerk/themes';

const Navbar = () => {
    const { userId } = auth();
    return (
        <nav className=" p-1 md:p-2">
            <div className='navbar flex justify-between w-full rounded mb-2 px-2 py-2'>
                <div className="logo">
                    <Link href={"/"}>
                        <Image
                            src={"/logo.png"}
                            width={90}
                            height={45}
                            alt='logo_image'
                            className='logo_name'
                        />
                    </Link>
                </div>

                <div className='flex gap-3 items-center'>
                    {!userId ? (
                        <>
                            <Link href={"/sign-up"} className='capitalize'>
                                sign up
                            </Link>

                            <Link href={"/sign-in"}>
                                <div className="button_idv">
                                    <button className="rounded-md bg-gradient-to-r from-amber-700 to-amber-950 font-bold px-3 py-2 capitalize">
                                        sign in
                                    </button>
                                </div>
                            </Link>
                        </>) : (
                        <div className="flex flex-end items-center gap-3">

                            <Link href={"/"} className="flex gap-2 rounded-md bg-gradient-to-r from-indigo-800 to-indigo-950 font-bold p-2 capitalize items-center">
                                <Image
                                    src={"/icons8-add-picture-30.png"}
                                    width={24}
                                    height={24}
                                    alt='add'
                                />
                                <p className='text-zinc-300 hidden md:block'>create post</p>
                            </Link>

                            <div className="avatar flex items-center gap-3">
                                <div className="flex items-center">
                                    <UserButton appearance={{
                                        baseTheme: dark,
                                    }} />
                                </div>
                            </div>

                            <div className="button_idv cursor-pointer">
                                <SignOutButton>
                                    <Image
                                        src={"/logout.png"}
                                        width={20}
                                        height={20}
                                        alt='logo_image'
                                    />
                                </SignOutButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar