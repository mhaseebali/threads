"use client"
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Bottombar() {
    const router = useRouter();
    const pathName = usePathname();

    return (
        <section className="bottombar">
            <div className="bottombar_container">
            {sidebarLinks.map((Links) => {
                    const isActive = (pathName.includes(Links.route) &&
                    Links.route.length > 1) || pathName === Links.route;

                return (
                    <Link
                        href={Links.route}
                        key={Links.label}
                        className={`bottombar_link ${isActive && 'bg-primary-500'}`}
                    >
                        <Image 
                            src={Links.imgURL}
                            alt={Links.label}
                            width={24}
                            height={24}
                        />
                        <p className="text-subtle-medium text-light-1 max-sm:hidden">{Links.label.split
                        (/\s+/)[0]}</p>
                    </Link>
                )})}
            </div>
        </section>
    )
}

export default Bottombar;