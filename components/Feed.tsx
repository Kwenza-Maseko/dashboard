'use client';
import Link from 'next/link';
import { useUser, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { useState } from 'react';

const Feed = () => {
    const { user, isSignedIn } = useUser();
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="feed flex w-full justify-center p-1">
            <div className="flex gap-6 items-center">
                {!isSignedIn ? (
                    <>
                        <Link href="/sign-in">Login</Link>
                        <Link href="/sign-up">Sign Up</Link>
                    </>
                ) : (
                    <div className="post">
                        <div className="flex jj items-center w-full relative">
                            <div className="flex items-center gap-3">
                                <UserButton />
                                <div>
                                    <p>{user?.firstName} {user?.lastName}</p>
                                    <p className="username">{user?.primaryEmailAddress?.emailAddress}</p>
                                </div>
                            </div>
                            <div
                                className="flex items-center flex-end cursor-pointer menuu"
                                onClick={() => setDropdown((prev) => !prev)}
                            >
                                <Image
                                    src="/menu.png"
                                    width={15}
                                    height={13}
                                    alt="menu"
                                    className="menu"
                                />
                            </div>
                            {dropdown && (
                                <div className="absolute top-full mt-2 right-1 rounded dropdown ">
                                    <ul>
                                        <li className="py-2 px-4 hover:bg-gray-400 hover:rounded cursor-pointer">Edit</li>
                                        <li className="py-2 px-4  hover:bg-gray-400  hover:rounded cursor-pointer">Delete</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <Image
                            src="/placeholder.png"
                            width={340}
                            height={340}
                            alt="placeholder"
                            className="placeholder"
                        />

                        <div className="flex jj items-center w-full">
                            <div className="text-center">
                                <div>
                                    <Image
                                        src="/heart-outline.png"
                                        width={20}
                                        height={20}
                                        alt="like"
                                        className="like-icon"
                                    />
                                    <p>0</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-end text-center">
                                <div className="bookmark">
                                    <Image
                                        src="/bookmark.png"
                                        width={20}
                                        height={20}
                                        alt="bookmark"
                                        className="bookmark-icon"
                                    />
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Feed;
