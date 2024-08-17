
import Navbar from '@/components/Navbar';
import { sidebarLinks } from '@/contents';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Profile from '@/components/Profile';
import Feed from '@/components/Feed';
export default function Home() {

  return (
    <div>
      <div className=''>

        <div className=" flex items-center justify-center md:hidden">
          <div className="bg-zinc-900 rounded mb-7 gap-1 p-2 flex w-2/3 border border-zinc-600 items-center">
            <div className="search_icon_div">
              <Image
                src={"/search.png"}
                width={15}
                height={15}
                alt='search'
                className='search_icon'
              />
            </div>
            <div className="input_idv w-full">
              <input type="text" placeholder='Search Here...' className='bg-zinc-900  focus:outline-none' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
