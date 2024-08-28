import Image, {StaticImageData} from "next/image";

const Card = ({image,text,width}:{image:StaticImageData, text:string, width:string}) => {
    return <div className={`flex text-white font-light flex-col bg-stone-900 ${width} mb-6`}>
        <Image className="w-full" src={image} alt=""/>
        <div className="p-4">{text}</div>
    </div>
}

export default Card;
