import ItemList from "../components/category/ItemList";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  console.log("kek");
  console.log(category);
  console.log("kek");

  const { data } = trpc.item.getAllByCategory.useQuery({
    category: category as string,
  });

  console.log(data);
  return (
    <div>
      <ItemList data={data} category={category as string} />
      {/* {data?.map(d => {
      return <div key={d.id}>{d.name}</div>
    })} */}
    </div>
  );
};

export default Category;
