'use client';

import Image from 'next/image';
import Link from 'next/link';

import { faBagShopping, faRightFromBracket, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/features/auth-slice';

type props = {
  transparent?: boolean;
};

const NavBar = ({ transparent = false }: props) => {
  const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth);

  const dispatch = useDispatch();

  return (
    <>
      <nav className={`px-9 py-4 ${!transparent ? 'bg-[rgba(0,0,0,0.07)] absolute w-full z-10' : ''}`}>
        <div className="flex justify-between">
          <div className="flex justify-around">
            <div className="flex items-center ">
              <Link href="/">
                <Image
                  src={transparent ? '/assets/logos/DNK_logo_2.png' : '/assets/logos/DNK_logo.png'}
                  alt="DNK_logo"
                  width="96"
                  height="48"
                  className="object-cover cursor-pointer"
                />
              </Link>
            </div>
            <Link href="/women" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
              Women
            </Link>
            <Link href="/men" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
              Men
            </Link>
            <Link href="/accessories" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
              Accessories
            </Link>
          </div>
          <div className="flex justify-around">
            <Link href="/about" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
              About
            </Link>
            <Link href="/contact-us" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
              contact us
            </Link>
            {/* <Link href="" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
              rs
            </Link> */}
            {isAuth ? (
              <>
                <Link
                  href=""
                  className={`${
                    !transparent ? 'text-white' : ''
                  }  mx-2 py-6 px-2 uppercase relative inline-flex items-center p-3 text-sm font-medium text-center`}
                >
                  <FontAwesomeIcon icon={faBagShopping} className="w-5 h-5" aria-hidden="true" />
                  <span className="sr-only">Notifications</span>
                  <div
                    className={`absolute ${
                      transparent ? 'bg-white border border-black' : 'bg-black'
                    } inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full top-[0.9rem] -right-[0.2rem]`}
                  >
                    20
                  </div>
                </Link>
                <Link href="" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
                  <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                </Link>
                <button
                  className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <Link href="login" className={`${!transparent ? 'text-white' : ''}  mx-2 py-6 px-2 uppercase`}>
                  <FontAwesomeIcon icon={faRightToBracket} className="w-5 h-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
