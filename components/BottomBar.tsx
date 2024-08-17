'use client';
import { sidebarLinks } from "@/contents"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between p-2">
      {
        sidebarLinks.map((item) => (
          <Link href={`${item.url}`} key={item.id}>
            <div className={`${pathname === item.url ? "bg-zinc-800" : "hover:bg-zinc-800"} "flex justify-center p-2 rounded-full "`}>
              <div>
                <Image src={item.img_url}
                  width={24}
                  height={24}
                  alt="ico"
                />
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default BottomBar