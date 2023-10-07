import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <>
      <footer className="bg-white p-6 font-serif flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-4">
            <FontAwesomeIcon icon={faCopyright} />
          </div>
          <p>2023</p>
        </div>
        <div>
          <ul className="flex gap-2">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
