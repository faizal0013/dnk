import ProductCard from '../ProductCard/ProductCard';
import ProductMenu from '../ProductMenu/ProductMenu';
import Breadcrumb from '../layouts/Breadcrumb';

type Props = {
  title: string;
};

export default function ProductLayout({ title }: Props) {
  return (
    <div className="w-[85rem] mx-auto">
      <div className="flex justify-around">
        <ProductMenu />
        <div className="w-[60rem] bg-white p-20 flex-col flex gap-8">
          <Breadcrumb />
          {/* <div className="flex flex-col gap-8">
            <p className="text-gray-400">Home/{title}</p>
            <p className="text-6xl font-bold">{title}</p>
          </div> */}
          <div className="flex flex-wrap gap-8 p-2">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
