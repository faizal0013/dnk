import ProductCard from '../ProductCard/ProductCard';

const FeaturedProducts = () => {
  return (
    <section className="bg-[#f5f7f9] p-20">
      <div className="w-[80rem] mx-auto flex flex-col gap-y-8">
        <div>
          <p className="text-center text-[2.625rem] font-bold">Featured Products</p>
          <div className="flex justify-center mt-6">
            <span className="w-[100px] border border-t-[1] border-[#0084d6]" />
          </div>
        </div>
        <div className="flex flex-wrap gap-8 p-2">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
