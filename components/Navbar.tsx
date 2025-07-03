
import Image from 'next/image'
import NavItems from './Naviterms'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer ">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={56}
                height={54}
            />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems/>
            <SignedOut>
                <SignInButton>
                    <button className="btn btn-signin md:font-[23px]">Sign-in</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar
