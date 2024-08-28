import Image from "next/image";
import logo from "@/public/logo.png";
import hero from "@/public/humble-beginnings/header.png";
import img1 from "@/public/humble-beginnings/wheeler-0.png";
import img2 from "@/public/humble-beginnings/wheeler-1.png";
import img3 from "@/public/humble-beginnings/wheeler-2.png";
import img4 from "@/public/humble-beginnings/wheeler-3.png";

import Link from "next/link";
import Footer from "@/app/components/footer";
import HamburgerMenu from "@/app/components/HamburgerMenu";
import HeaderCard from "@/app/components/HeaderCard";
import Card from "@/app/components/Card";

const Header = () => {
    return <div className="z-20 bg-white w-full pb-14 pt-8">
        <div className="flex justify-end">
            <HamburgerMenu/>
        </div>

        <div
            className="hidden md:flex w-full justify-between items-center max-w-screen-xl ml-auto mr-36 font-bold lg-custom:text-xl text-sm">
            <Link href="/">
                <Image className="w-52 mb-4 mr-4" src={logo}
                       alt="Wheeler Manufacturing company Incorporated Est. 1946"/>
            </Link>
            <Link href="/" className="p-2 hover:bg-gray-100">Home</Link>
            <Link href="/about" className="p-2 hover:bg-gray-100">About</Link>
            <Link href="/our-program" className="p-2 hover:bg-gray-100">Our Program</Link>
            <div className="group">
                <a href="/#" className="p-2 block hover:bg-gray-100">Our Lines</a>
                <div
                    className="max-h-0 transition-all duration-500 overflow-y-hidden absolute z-20 gap-3 bg-white group-hover:max-h-screen flex flex-col">
                    <div className="border-2 border-gray-100 flex flex-col">
                        <Link className="p-2 hover:bg-gray-100" href="/wheeler-jewelry">Wheeler Jewelry</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/rings">Rings</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/sterling-silver">Sterling Silver</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/uniquely-you">Uniquely You</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/natures-1">{"Nature's 1"}</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/emma-ivy">Emma & Ivy</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/silver-fetish">Silver Fetish</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/bria-kate-moda-stainless">Bria Kate & Moda
                            Stainless</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/living-legends">Living Legends</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/bria-kate-premier">Bria Kate Premier</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/black-hills-gold">Black Hills Gold</Link></div>
                </div>
            </div>
            <Link href="/displays" className="p-2 hover:bg-gray-100">Displays</Link>
            <Link href="/catalogs" className="p-2 hover:bg-gray-100">Catalogs</Link>
            <Link href="/login" className="p-2 hover:bg-gray-100">Current Vendor Login</Link>
            <Link href="/contact-us" className="p-2 hover:bg-gray-100">Contact Us</Link>
        </div>
    </div>
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Header/>
            <div className="bg-metal ml-auto bg-cover w-full max-w-screen-3xl mb-36 ">
                <HeaderCard image={hero} title="Humble Beginnings"/>
                <div className="w-full max-w-screen-lg
                 flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col w-full max-w-screen-sm mr-6">
                        <div
                            className="w-full  font-light text-xl p-6 sm:p-24 bg-white border-l-2 border-stone-800">
                            <p className="mb-4">In 1946, Robert (RB) and Fran Wheeler used the money they saved
                                serving
                                in World War II
                                to buy a small jewelry business in Lemmon, SD and named it Wheeler Manufacturing
                                Company. At the time of the purchase, the company occupied 120 square feet and had
                                four
                                employees.</p>
                            <p className="mb-4">Wheeler’s primary business, in those days, was producing sterling
                                silver
                                ring sets with
                                native agate stones that were cut and polished Humble Beginnings in Lemmon. It was a
                                hands-on operation for both of them. RB made regular trips to Montana to buy uncut
                                agate, was the lone company salesman, and designed the machines to cut the agate.
                                Fran
                                engraved the silver rings and handled the company’s bookwork.</p>
                            <p className="mb-4">By 1957 Wheeler was selling to wholesale customers throughout the
                                Western US and Canada.
                                The company continued to grow and in 1978 the Wheelers’ sons, Brad and Rob, joined
                                the
                                business.</p>
                        </div>
                        <div className="flex flex-wrap sm:flex-nowrap gap-6 mt-6 justify-between items-start lg:-mb-36">
                            <Card width="w-64" image={img3} text="Foreman Rudy Sackmann
keeps watch on company
operations. Rudy worked
at Wheeler for 59 years.
He is one of more than
50 employees who have
been at Wheeler for over
25 years."/>
                            <Card width="w-96" image={img4} text="Fran and RB Wheeler in 1996, reflect
on 50 years in business as Wheeler
Manufacturing. Using the money they
saved serving in World War II – RB was
stationed in the South Pacific and Fran
worked for the FBI – they purchased
the company in 1946. Prior to their
ownership, the company had been
owned and operated by RM Horr since
1910 and produced jewelry since 1930."/>
                        </div>
                    </div>
                    <div className="flex lg:flex-col shrink items-start justify-between lg:justify-start w-full max-w-screen-sm">
                        <Card width="w-64" image={img1} text="RB Wheeler holds a chunk of
rough jade that would be cut
into stones by machines he
designed."/>
                        <Card width="w-64" image={img2} text="Harold Scoular mounts
stones into their settings.
Techniques have evolved
over the years, but
Wheeler still manually
sets stones."/>
                    </div>

                </div>
            </div>
            <Footer/>
        </main>
    );
}
