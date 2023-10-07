import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import SalesReport from '@/components/SalesReport/SalesReport';
import SideBar from '@/components/SideBar/SideBar';
import TopSellingProducts from '@/components/TopSellingProducts/TopSellingProducts';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full">
        <NavBar />
        <main className="flex grow overflow-hidden">
          <SideBar />
          <section className=" bg-gray-100 w-full overflow-y-scroll flex flex-col">
            <div className="px-8 py-6 grow flex flex-col gap-6">
              <div className="flex items-center justify-between my-4">
                <h3 className="font-bold text-xl">Dashboard</h3>
                <div className="text-sm breadcrumbs">
                  <ul>
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Documents</a>
                    </li>
                    <li>Add Document</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div className="bg-white p-[25px] rounded-xl flex flex-col gap-6" key={i}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl font-bold">100+</p>
                          <p className="text-[15px] font-serif">Total Products</p>
                        </div>
                        <div className="p-3 rounded-xl bg-[rgba(130,49,211,.082)]">
                          <Image
                            width={100}
                            height={100}
                            src="assets/svgs/bag-shopping-svgrepo-com.svg"
                            alt=""
                            className="w-8 text-[rgb(130, 49, 211)]"
                          />
                        </div>
                      </div>
                      <div className="flex bg-[#f7f8fbf5] px-3 py-2 rounded-lg gap-3 text-sm font-serif items-center">
                        <div className="flex items-center gap-2 text-green-500 font-bold text-base">
                          <div className="w-2">
                            <FontAwesomeIcon icon={faArrowUp} />
                          </div>
                          <p>25.36%</p>
                        </div>
                        <p>Since last month</p>
                      </div>
                    </div>
                  ))}
                </div>
                <SalesReport />
                <TopSellingProducts />
              </div>
            </div>
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}
