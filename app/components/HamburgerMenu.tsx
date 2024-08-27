'use client'
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {usePathname} from "next/navigation";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const body = window.document.querySelector("body");
        if (!body) return;
        if (isOpen) body.style.overflowY = "hidden";
        if (!isOpen) body.style.overflowY = "auto";
    },[isOpen])

    return <div className="md:hidden z-50 relative">
        <button title="Main Menu" className="z-50 relative p-1 ml-12" onClick={() => {
            setIsOpen(!isOpen)
        }}>
            {
                isOpen ?
                    <FontAwesomeIcon size="2x" icon={faCircleXmark} color="black"/> :
                    <FontAwesomeIcon size="2x" icon={faBars} color="black"/>
            }
        </button>
        <div className={`fixed inset-0 bg-metal overflow-y-auto z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform`}>
            {
                <ul className="
                mt-8
                font-pt_sans
                text-left
                font-bold
                bg-slate-300
                p-8
                text-dark-gray uppercase justify-between text-xl flex-col w-[90%] gap-2 max-w-screen-md pb-7 z-50 relative">
                    <li className="relative group w-48"><Link href="/" className="p-2 hover:bg-gray-100 block">Home</Link>
                    </li>
                    <li className="relative group w-48"><Link href="/about"
                                                              className="p-2 hover:bg-gray-100 block">About</Link></li>
                    <li className="relative group w-48"><Link href="/our-program" className="p-2 hover:bg-gray-100 block">Our
                        Program</Link></li>
                    <div className="group">
                        <li className="relative group w-48"><a href="/#" className="p-2 block hover:bg-gray-100">Our
                            Lines</a></li>
                        <div
                            className="transition-all duration-500 gap-3 ml-3 group-hover:max-h-screen flex flex-col">
                            <ul className=" w-96 max-w-[90%] border-l-2 ml-2 gap-3 flex flex-col">
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/wheeler-jewelry">Wheeler
                                    Jewelry</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/rings">Rings</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/sterling-silver">Sterling
                                    Silver</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/uniquely-you">Uniquely You</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/natures-1">{"Nature's 1"}</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/emma-ivy">Emma & Ivy</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/silver-fetish">Silver
                                    Fetish</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/bria-kate-moda-stainless">Bria Kate &
                                    Moda Stainless</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/living-legends">Living Legends</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/bria-kate-premier">Bria Kate
                                    Premier</Link></li>
                                <li className="text-light-gray hover:bg-primary-300"><Link
                                    className="p-2 hover:bg-gray-100 block" href="/black-hills-gold">Black Hills
                                    Gold</Link></li>
                            </ul>
                        </div>
                    </div>
                    <li className="relative group w-48"><Link href="/displays"
                                                              className="p-2 hover:bg-gray-100 block">Displays</Link></li>
                    <li className="relative group w-48"><Link href="/catalogs"
                                                              className="p-2 hover:bg-gray-100 block">Catalogs</Link></li>
                    <li className="relative group w-48"><Link href="/login" className="p-2 hover:bg-gray-100 block">Current
                        Vendor Login</Link></li>
                    <li className="relative group w-48"><Link href="/contact-us" className="p-2 hover:bg-gray-100 block">Contact
                        Us</Link></li>
                </ul>
            }
        </div>
    </div>
}

export default HamburgerMenu;
