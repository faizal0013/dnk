import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <>
      <nav className="px-12 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between ">
            <Link href="">
              <Image width={100} height={100} src="/assets/logos/DNK_logo_2.png" alt="" />
            </Link>
          </div>
          <div className="dropdown">
            <div className="w-36 cursor-pointer" tabIndex={0}>
              <div className="flex justify-around items-center py-2">
                <div className="flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                      <Image width={100} height={100} src="https://i.pravatar.cc/300" alt="avater" />
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-xl">name</p>
                  </div>
                </div>
                <div className="w-4">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
              <li>
                <a>
                  <div className="flex gap-3">
                    <div>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <p>Profile</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="flex gap-3">
                    <div>
                      <FontAwesomeIcon icon={faRightFromBracket} />
                    </div>
                    <p>Logout</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
