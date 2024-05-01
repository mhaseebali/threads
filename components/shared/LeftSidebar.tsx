"use client"
import {sidebarLinks} from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter  } from "next/navigation";


function LeftSidebar() {
    const router = useRouter();
    const pathName = usePathname();

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((Links) => {
                    const isActive = (pathName.includes(Links.route) &&
                    Links.route.length > 1) || pathName === Links.route;

                return (
                    <Link
                        href={Links.route}
                        key={Links.label}
                        className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                    >
                        <Image 
                            src={Links.imgURL}
                            alt={Links.label}
                            width={24}
                            height={24}
                        />
                        <p className="text-light-1 max-lg:hidden">{Links.label}</p>
                    </Link>
                )})}
            </div>
            <div className="mt-10 px-6">
            <SignedIn>
                    <SignOutButton redirectUrl="/sign-in">
                        <div className="flex cursor-pointer gap-4 p-4">
                            <Image
                                src="/assets/logout.svg"
                                alt="logout"
                                width={24}
                                height={24}
                            />
                            <p className="text-light-2 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    )
}

export default LeftSidebar;