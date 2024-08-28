import Image, {StaticImageData} from "next/image";

const HeaderCard = ({image, title}: { image: StaticImageData, title: string }) => {
    return <div className="mt-36 lg-custom:-ml-16">
        <div className="relative bg-stone-800 w-full max-w-screen-lg mt-14">
            <div className="w-full max-w-screen-lg lg-custom:translate-x-16 lg-custom:-translate-y-14 mb-6">
                <Image className="w-full max-w-screen-lg lg-custom:ml-0" src={image} alt=""/>
                <h2 className="text-4xl sm:text-7xl font-serif text-white mt-8 pb-12 pl-6 lg-custom:pl-0 lg-custom:pb-0">{title}</h2>
            </div>
        </div>
    </div>
}

export default HeaderCard;
