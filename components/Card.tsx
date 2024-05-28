import Image from "next/image";

interface CardProps {
    image: string;
  }

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative min-w-[300px]  rounded-xl flex justify-center items-center">
        <Image src={image} width={300} height={300} alt={image} />
    </div>
  )
}

export default Card