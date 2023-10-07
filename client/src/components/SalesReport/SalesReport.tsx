'use client';

import { faArrowUp, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SalesReport = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-xl flex gap-3 flex-col">
        <div className="flex justify-between items-center">
          <p className="font-serif font-bold text-lg">Sales Report</p>
          <div className="w-4 cursor-pointer">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-lg"></div>
            <div className="font-serif text-sm">Orders</div>
            <div className="font-bold text-2xl">$8,550</div>
            <div className="flex items-center gap-2 text-green-500 font-bold text-xs">
              <div className="w-2">
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
              <p>25.36%</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-lg"></div>
            <div className="font-serif text-sm">Orders</div>
            <div className="font-bold text-2xl">$8,550</div>
            <div className="flex items-center gap-2 text-green-500 font-bold text-xs">
              <div className="w-2">
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
              <p>25.36%</p>
            </div>
          </div>
        </div>
        <div className="h-[16rem]">
          {/* <Line
            data={{
              labels: ['Mon', 'Tue', 'Wed'],
              datasets: [
                {
                  label: 'Sales of the Week',
                  data: [3, 9, 6],
                  backgroundColor: 'aqua',
                  borderColor: 'black',
                  tension: 0.4,
                },
              ],
            }}
          ></Line> */}
        </div>
      </div>
    </>
  );
};

export default SalesReport;
