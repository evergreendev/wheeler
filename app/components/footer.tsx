import logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return <div className="p-8">
        <div className="flex mx-auto text-xl font-bold">
            <Link href="/">
                <Image className="w-52" src={logo} alt="Wheeler"/>
            </Link>
            <div className="flex flex-col gap-3 mx-4">
                <a href="tel:800-843-1937">800.843.1937</a>
                <p>PO Box 629 • Lemmon, SD • 57638</p>
            </div>
        </div>
    </div>
}

export default Footer;
