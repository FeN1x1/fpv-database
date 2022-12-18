import { Item } from "@prisma/client";

const Item = ({ data }: { data: Item }) => {
  return (
    <div>
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {data.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{data.company}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{data.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
