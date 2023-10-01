import Image from 'next/image';
import Button from '../layouts/Button';

const LimitedTimeOffer = () => {
  return (
    <section className="p-20 bg-[#f5f7f9] ">
      <div className="w-[90rem] mx-auto flex flex-col gap-y-28">
        <div className="h-[38rem] border bg-[url('/assets/images/home-bg-2.jpg')] bg-fixed bg-no-repeat bg-top flex">
          <div className="flex flex-col w-[45rem] gap-y-8 p-20 justify-end">
            <p className="text-white">Limited Time Offer</p>
            <p className="text-white text-6xl">Special Edition</p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
            <p className="text-white text-3xl">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
            <div>
              <Button bg>SHOP NOW</Button>
            </div>
          </div>
        </div>
        <div className="w-[80rem] mx-auto flex flex-wrap gap-x-12 justify-around items-center">
          <div className="flex justify-center flex-col items-center gap-y-2 w-60">
            <div className="w-16">
              <Image src="/assets/icons/globe-free-img.png" alt="globe-free-img.png" width={100} height={100} />
            </div>
            <p className="text-center text-lg font-bold">Worldwide Shipping</p>
            <p className="text-center text-sm">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-y-2 w-60">
            <div className="w-16">
              <Image src="/assets/icons/quality-free-img.png" alt="globe-free-img.png" width={100} height={100} />
            </div>
            <p className="text-center text-lg font-bold">Best Quality</p>
            <p className="text-center text-sm">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-y-2 w-60">
            <div className="w-16">
              <Image src="/assets/icons/tag-free-img.png" alt="globe-free-img.png" width={100} height={100} />
            </div>
            <p className="text-center text-lg font-bold">Best Offers</p>
            <p className="text-center text-sm">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-y-2 w-60">
            <div className="w-16">
              <Image src="/assets/icons/lock-free-img.png" alt="globe-free-img.png" width={100} height={100} />
            </div>
            <p className="text-center text-lg font-bold">Secure Payments</p>
            <p className="text-center text-sm">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
