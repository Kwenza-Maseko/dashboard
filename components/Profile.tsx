import Image from 'next/image'
import Link from 'next/link'

const Profile = () => {
    return (
        <div className="profile_div mt-1 text-zinc-400">
            <div className='flex gap-5 items-center mb-4'>
                <div className="profile_items">
                    <p className='font-bold'>Posts</p>
                    <p className='text-center' >0</p>
                </div>
                <div className="profile_items">
                    <p className='font-bold'>Followers</p>
                    <p className='text-center' >0</p>
                </div>
                <div className="profile_items">
                    <p className='font-bold'>Following</p>
                    <p className='text-center'>0</p>
                </div>
            </div>

            <div className="occupation">
                <p className='text-zinc-300'>Web Developer/ UI</p>
                <Link href={"#"} className='flex items-center gap-1 domain_link mb-2'>
                    <Image
                        src={"/link.png"}
                        width={15}
                        height={15}
                        alt='link' />dodmcm.com
                </Link>
                <button className="rounded-md bg-gradient-to-r from-amber-700 to-amber-950 font-bold px-3 py-2 capitalize text-zinc-200">
                    manage account
                </button>
            </div>


        </div>
    )
}

export default Profile