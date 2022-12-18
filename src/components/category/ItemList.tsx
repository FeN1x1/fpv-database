import type { Item as TItem } from "@prisma/client";
import Item from "./Item";

const ItemList = ({
  data,
  category,
}: {
  data: TItem[] | undefined;
  category: string;
}) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900">
        {`${category} List`}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data?.map((d) => {
          return (
            <div key={d.id}>
              <Item data={d} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
