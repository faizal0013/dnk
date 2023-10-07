'use client';

import { faAngleRight, faGauge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react';

const SideBar = () => {
  const [subSideBat, setSubSideBat] = useState(false);
  return (
    <>
      <aside className="w-[18rem] max-w-[18rem] min-w-[18rem] px-6 py-4 overflow-y-scroll divide-y">
        <div
          className="cursor-pointer p-2 flex gap-2 flex-col"
          onClick={() => setSubSideBat(subSideBat => !subSideBat)}
        >
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div>
                <FontAwesomeIcon icon={faGauge} />
              </div>
              <p>Dashboard</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div>
            <div className={`${subSideBat ? 'block' : 'hidden'}`}>
              <div className="p-4 pl-12">
                <p>Products</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer p-2 flex gap-2 flex-col">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
