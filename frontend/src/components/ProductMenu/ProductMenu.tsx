import { BiSearch } from 'react-icons/bi';

export default function ProductMenu() {
  return (
    <div className="flex flex-col gap-8">
      <form method="post">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <BiSearch />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
        <div className="mt-11">
          <label htmlFor="filter-price" className="text-lg">
            Filter by Price
          </label>
          <input
            id="filter-price"
            type="range"
            defaultValue={50}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between  items-center mt-2">
            <button className="bg-blue-500 text-white px-6 text-lg" type="submit">
              Filter
            </button>
            <p>Price: $20 — $110</p>
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-6">
        <p className="text-2xl">Categories</p>
        <div className="flex justify-between">
          <p className="hover:text-blue-500 cursor-pointer">Accessories</p>
          <p>(7)</p>
        </div>
        <div className="flex justify-between">
          <p className="hover:text-blue-500 cursor-pointer">Men</p>
          <p>(7)</p>
        </div>
        <div className="flex justify-between">
          <p className="hover:text-blue-500 cursor-pointer">Women</p>
          <p>(7)</p>
        </div>
      </div>
    </div>
  );
}
