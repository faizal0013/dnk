import Image from 'next/image';
import Link from 'next/link';
import Button from './layouts/Button';
import { BsFacebook, BsGoogle, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="py-24">
          <div className="w-[85rem] mx-auto">
            <div className="flex justify-around">
              <div className="flex flex-col">
                <Link href="/">
                  <Image src="/assets/images/logo@2x-free-img.png" alt="DNK_logo" width="100" height="100" />
                </Link>
              </div>
              <div className="flex flex-col gap-y-8">
                <p className="text-2xl">For Him</p>
                <div className="flex flex-col gap-y-1 text-gray-600">
                  <Link href="" className="hover:text-blue-500">
                    Women Jeans
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Tops and Shirts
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Women jackets
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Heels and Flats
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Women Accessories
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-y-8">
                <p className="text-2xl">For Her</p>
                <div className="flex flex-col gap-y-1 text-gray-600">
                  <Link href="" className="hover:text-blue-500">
                    Women Jeans
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Tops and Shirts
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Women jackets
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Heels and Flats
                  </Link>
                  <Link href="" className="hover:text-blue-500">
                    Women Accessories
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-y-8">
                <p className="text-2xl">Subscribe</p>
                <input
                  className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email-address"
                  type="text"
                  placeholder="Your email address ..."
                />
                <Button bg color="bg-blue-500">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border" />
        <div className="w-[85rem] mx-auto flex justify-between py-6">
          <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>
          <div className="flex gap-x-8">
            <BsFacebook className="cursor-pointer text-lg hover:text-blue-500" />
            <BsYoutube className="cursor-pointer text-lg hover:text-blue-500" />
            <BsTwitter className="cursor-pointer text-lg hover:text-blue-500" />
            <BsInstagram className="cursor-pointer text-lg hover:text-blue-500" />
            <BsGoogle className="cursor-pointer text-lg hover:text-blue-500" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
