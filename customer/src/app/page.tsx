import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/layouts/Button';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import LimitedTimeOffer from '@/components/home/LimitedTimeOffer';
import Footer from '@/components/Footer';

import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@/components/NavBar'), {
  ssr: false,
});

export default function Home(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="h-[800px] bg-[url('/assets/images/home-bg-1.jpg')] w-[100%] bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full backdrop-brightness-75">
          <div className="max-w-[1200px] mx-auto relative">
            <div className="absolute top-56">
              <div className="flex flex-col gap-y-8">
                <div className="max-w-2xl font-bold leading-[4.3rem]">
                  <p className="text-white text-[4.125rem]">Raining Offers For Hot Summer!</p>
                </div>
                <p className="text-white font-bold text-[2.125rem]">25% Off On All Products</p>
                <div className="flex gap-x-4">
                  <Button bg>Shop Now</Button>
                  <Button>Find More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="w-[63%] mx-auto my-20 flex flex-col gap-y-32 p-6">
          {/* <div className="flex justify-between h-8">
            <button className="w-4">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="mx-4 flex w-full overflow-x-scroll">
              {Array.from(Array(5)).map((_, i) => {
                return (
                  <div className="flex justify-center h-full w-[68rem] mr-28" key={i}>
                    <Image
                      src={`/assets/images/client-logo-${i + 1}.png`}
                      alt={`client-logo-${i + 1}.png`}
                      width={0}
                      height={0}
                    />
                  </div>
                );
              })}
            </div>
            <button className="w-4">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div> */}
          <div className="flex gap-x-6">
            <div className="bg-[url('/assets/images/women-fashion-free-img.jpg')] bg-cover bg-no-repeat h-[30rem] flex flex-col justify-end w-[24rem] bg-right-top">
              <div className="w-full h-full flex backdrop-brightness-50 items-end">
                <div className="flex flex-col gap-y-4 p-[40px]">
                  <div>
                    <p className="text-white text-2xl">20% Off On Tank Tops</p>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
                    </p>
                  </div>
                  <div>
                    <Button bg>Shop Now</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/assets/images/men-fashion-free-img.jpg')] bg-cover bg-no-repeat h-[30rem] flex flex-col justify-end w-[24rem] bg-left-top">
              <div className="w-full h-full flex backdrop-brightness-50 items-end">
                <div className="flex flex-col gap-y-4 p-[40px]">
                  <div>
                    <p className="text-white text-2xl">20% Off On Tank Tops</p>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
                    </p>
                  </div>
                  <div>
                    <Button bg>Shop Now</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/assets/images/footwear-free-img.jpg')] bg-cover bg-no-repeat h-[30rem] flex flex-col justify-end w-[24rem] bg-right-top">
              <div className="w-full h-full flex backdrop-brightness-50 items-end">
                <div className="flex flex-col gap-y-4 p-[40px]">
                  <div>
                    <p className="text-white text-2xl">20% Off On Tank Tops</p>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
                    </p>
                  </div>
                  <div>
                    <Button bg>Shop Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <LimitedTimeOffer />
      <Footer />
    </>
  );
}
