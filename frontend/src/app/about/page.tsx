import Image from 'next/image';
import { BsFacebook, BsGoogle, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function AboutPage(): JSX.Element {
  return (
    <>
      <div className="h-[650px] bg-[url('/assets/images/bg-3.jpg')] bg-fixed w-full bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-50">
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-6xl font-bold">About Us</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f7f9] p-20 flex justify-center">
        <div className="flex flex-[1] flex-col bg-white p-20 gap-y-8 justify-center">
          <div className="border w-24 h-1.5 bg-blue-500 rounded-lg" />
          <p className="text-4xl font-bold">Who We Are</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
            consequat auctor eu in elit.
          </p>
        </div>
        <div className="flex flex-[1] w-full bg-cover">
          <Image
            src="/assets/images/slide-image-free-img.jpg"
            alt="slide-image-free-img.jpg"
            width={500}
            height={500}
            className="bg-cover w-full"
          />
        </div>
      </div>
      <div className="p-24">
        <div className="flex justify-center flex-col items-center gap-8 w-[55rem] mx-auto">
          <div className="border w-24 h-1.5 bg-blue-500 rounded-lg" />
          <p className="font-bold text-xl">A Few Words About</p>
          <p className="font-bold text-4xl">Our Team</p>
          <p className="text-center">
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>
          <div className="grid grid-cols-3 gap-12">
            <div className="flex flex-col justify-center items-center border p-8 gap-6 w-[15rem] bg-[#f5f7f9]">
              <img src="https://i.pravatar.cc/300" className="w-24 rounded-full h-24" />
              <div>
                <p className="font-bold">Harvey Spector</p>
                <p className="text-gray-500">Founder - CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fixed bg-no-repeat bg-[url('/assets/images/bg-4.jpg')] h-[35rem] ">
        <div className="h-full w-full backdrop-brightness-50 flex justify-center items-center">
          <div className="h-full w-[28rem] flex justify-center items-center bg-[#f5f7f9]">
            <div className="flex flex-col items-center gap-8">
              <div className="border w-24 h-1.5 bg-blue-500 rounded-lg" />
              <p className="text-5xl font-bold">Follow Us</p>
              <div className="flex gap-x-8">
                <BsFacebook className="cursor-pointer text-lg hover:text-blue-500" />
                <BsYoutube className="cursor-pointer text-lg hover:text-blue-500" />
                <BsTwitter className="cursor-pointer text-lg hover:text-blue-500" />
                <BsInstagram className="cursor-pointer text-lg hover:text-blue-500" />
                <BsGoogle className="cursor-pointer text-lg hover:text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80rem] mx-auto flex flex-wrap gap-x-12 justify-around items-center py-28">
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
      <div className="border" />
    </>
  );
}
