import Image from "next/image";
import logo from "@/public/logo.png";
import necklace from "@/public/necklace.png";
import ring1 from "@/public/ring-1.png";
import ring2 from "@/public/ring-2.png";

import wheeler from "@/public/brands/wheeler.png";
import ringsByWheeler from "@/public/brands/rings-wheeler.png";
import copperByWheeler from "@/public/brands/copper-wheeler.png";
import silverByWheeler from "@/public/brands/sterling-silver-wheeler.png";
import emmaIvy from "@/public/brands/emma-ivy.png";
import natures from "@/public/brands/natures1.png";
import silverFetish from "@/public/brands/silver-fetish.png";
import briaKate from "@/public/brands/bria-kate.png";
import moda from "@/public/brands/moda-stainles-steel.png";
import dakotaGoldSilver from "@/public/brands/dakota-gold-silver.png";
import stamper from "@/public/brands/stamper.png";
import briaKatePremier from "@/public/brands/bria-kate-premier.png";
import livingLegends from "@/public/brands/living-legends.png";
import uniquelyYou from "@/public/brands/uniquely-you.png";
import Link from "next/link";
import Footer from "@/app/components/footer";
import HamburgerMenu from "@/app/components/HamburgerMenu";

const Header = () => {
    return <div className="z-20 bg-white w-full pb-14 pt-8">
        <div className="flex justify-end">
            <HamburgerMenu/>
        </div>

        <div className="hidden md:flex w-full justify-between max-w-screen-xl ml-auto mr-36 font-bold lg:text-xl text-sm">
            <Link href="/" className="p-2 hover:bg-gray-100">Home</Link>
            <Link href="/about" className="p-2 hover:bg-gray-100">About</Link>
            <Link href="/our-program" className="p-2 hover:bg-gray-100">Our Program</Link>
            <div className="group">
                <a href="/#" className="p-2 block hover:bg-gray-100">Our Lines</a>
                <div className="max-h-0 transition-all duration-500 overflow-y-hidden absolute z-20 gap-3 bg-white group-hover:max-h-screen flex flex-col">
                    <div className="border-2 border-gray-100 flex flex-col">
                        <Link className="p-2 hover:bg-gray-100" href="/wheeler-jewelry">Wheeler Jewelry</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/rings">Rings</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/sterling-silver">Sterling Silver</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/uniquely-you">Uniquely You</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/natures-1">{"Nature's 1"}</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/emma-ivy">Emma & Ivy</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/silver-fetish">Silver Fetish</Link>
                        <Link className="p-2 hover:bg-gray-100" href="/bria-kate-moda-stainless">Bria Kate & Moda Stainless</Link>
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
            <div className="bg-metal bg-cover w-full">
                <div className="flex flex-wrap md:flex-nowrap items-start justify-center">
                    <Image src={necklace} alt="" className="-rotate-12 shrink md:w-96 w-64 -translate-y-20 sm:-mr-24 order-1 md:order-none"/>
                    <div className="bg-white p-16 px-24 w-full max-w-screen-md z-10 md:z-auto mt-auto mb-6">
                        <Image className="w-full mb-4" src={logo} alt="Wheeler Manufacturing company Incorporated Est. 1946"/>
                        <p className="font-light text-lg uppercase text-center text-gray-500">Manufacturing Company Incorporated, EST. 1946</p>
                    </div>
                    <div className="flex-col mt-auto sm:-ml-14 -mb-20 hidden md:flex order-2 shrink-0">
                        <Image src={ring1} alt="" className="-scale-y-100 -rotate-180 w-44 -mb-12"/>
                        <Image src={ring2} alt="" className="w-44 sm:-translate-x-1/2"/>
                    </div>
                </div>

                <div className="flex">
                    <div
                        className="flex z-20 bg-gray-500 min-w-[50%] font-light bg-opacity-80 text-white pl-8 pt-2 md:pt-10 pr-8 pb-2 md:pb-10 text-3xl md:text-5xl leading-snug">
                        <h2 className="ml-auto">
                            {"North America's"} jewelry wholesale leader<br className="hidden md:block"/> in the
                            tourist, souvenir and travel industry.
                        </h2>
                    </div>

                </div>
                <div className="bg-gray-950 p-4 my-24">
                    <div
                        className="flex max-w-screen-2xl gap-1 gap-y-3 flex-wrap mx-auto justify-around md:justify-evenly">
                        <Link href="/wheeler-jewelry"><Image src={wheeler} alt=""/></Link>
                        <Link href="/rings"><Image src={ringsByWheeler} alt=""/></Link>
                        <Link href="/wheeler-jewelry"><Image src={copperByWheeler} alt=""/></Link>
                        <Link href="/sterling-silver"><Image src={silverByWheeler} alt=""/></Link>
                        <Link href="/emma-ivy"><Image src={emmaIvy} alt=""/></Link>
                        <Link href="/natures-1"><Image src={natures} alt=""/></Link>
                        <Link href="/silver-fetish"><Image src={silverFetish} alt=""/></Link>
                        <Link href="/bria-kate-moda-stainless"><Image src={briaKate} alt=""/></Link>
                        <Link href="/bria-kate-moda-stainless"><Image src={moda} alt=""/></Link>
                        <Image src={dakotaGoldSilver} alt=""/>
                        <Link href="/black-hills-gold"><Image src={stamper} alt=""/></Link>
                        <Link href="/bria-kate-premier"><Image src={briaKatePremier} alt=""/></Link>
                        <Link href="/living-legends"><Image src={livingLegends} alt=""/></Link>
                        <Link href="/uniquely-you"><Image src={uniquelyYou} alt=""/></Link>
                    </div>

                </div>
            </div>
            <Footer/>
        </main>
    );
}
