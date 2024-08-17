'use client'
import { sidebarLinks } from '@/contents';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="sidebar">
            <div className="sidebar_items">
                {sidebarLinks.map((links) => (
                    <Link href={`${links.url}`} key={links.id}>
                        <div className={`${pathname === links.url ? " bg-zinc-600 " : " hover:bg-zinc-600"} p-1 mb-1 rounded flex items-center gap-2 w-full`}>
                            <Image
                                src={links.img_url}
                                width={24}
                                height={24}
                                alt='icons'
                                className='icons'
                            />
                            <p className='capitalize text-zinc-400'>{links.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <hr className='hl' />


            <div className="search_bar flex items-center gap-1 p-2 mt-5">
                <div className="search_icon_div">
                    <Image
                        src={"/search.png"}
                        width={15}
                        height={15}
                        alt='search'
                        className='search_icon'
                    />
                </div>
                <div className="input_idv">
                    <input type="text" placeholder='Search Here...' className='search_input focus:outline-none' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar