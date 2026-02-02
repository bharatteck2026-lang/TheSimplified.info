"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? "active" : "";

    return (
        <header>
            <div className="container">
                <nav>
                    <Link href="/" className="nav-logo">
                        {/* Using standard img tag if desired for simplicity, or Next Image. 
                        Next Image requires known sizing. Using standard img as per conversion request to keep it simple unless optimized.
                        But Next.js best practice is Image. 
                        I'll use unoptimized Image or standard img if sizing is tricky. 
                        Let's use standard img for logo to avoid layout shifts if we don't know exact size, or use fill.
                        Actually, let's use next/image with generic sizing and style.
                    */}
                        <Image
                            src="/logo.png"
                            alt="Simplified Media Studio"
                            width={200}
                            height={60}
                            style={{ height: '45px', width: 'auto' }}
                            priority
                        />
                    </Link>
                    <div className="nav-links">
                        <Link href="/" className={isActive("/")}>Home</Link>
                        <Link href="/about" className={isActive("/about")}>About</Link>
                        <Link href="/services" className={isActive("/services")}>Services</Link>
                        <Link href="/portfolio" className={isActive("/portfolio")}>Portfolio</Link>
                        <Link href="/contact" className={isActive("/contact")}>Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
