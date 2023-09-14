import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="w-[16rem] flex gap-2 flex-col cursor-pointer relative">
      <div className="w-full">
        <Image
          src="/assets/images/sports-shoe3-300x300.jpg"
          alt="sports-shoe3.jpg"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>
      <div className="top-6 left-4 absolute flex justify-between w-4/5">
        <div className="center inline-block rounded-3xl bg-white py-1.5 px-3.5 align-baseline font-sans text-xs shadow-lg">
          Sale!
        </div>
        <div className="w-7 hidden">
          <FontAwesomeIcon icon={faCartPlus} size="2xs" />
        </div>
      </div>
      <p className="font-bold">DNK Yellow Shoes</p>
      <p>Men</p>
      <div className="flex">
        <p className="line-through">$150.00</p>
        <p>$120.00</p>
      </div>
      <div className="flex">color</div>
      <div className="flex w-16">
        <FontAwesomeIcon icon={faStar} size="2xs" />
        <FontAwesomeIcon icon={faStar} size="2xs" />
        <FontAwesomeIcon icon={faStar} size="2xs" />
        <FontAwesomeIcon icon={faStar} size="2xs" />
      </div>
    </div>
  );
}
