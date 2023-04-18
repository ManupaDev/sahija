import client from "@/lib/sanity";
import Clothing from "./components/clothing";

export type ClothingType = {
  name: string;
  category: string;
  subcategory: string;
  price: string;
};

export default async function Home() {
  const query = `*[_type == "clothing"] {name,price,category,subcategory}`;
  const clothing = await client.fetch(query);
  console.log(clothing);

  return (
    <div className="p-4">
      <h1 className="my-2 text-3xl">All Clothing</h1>
      <div className="grid grid-cols-4 gap-8 ">
        {clothing.map((clothing: ClothingType, i: number) => {
          return (
            <Clothing
              key={i}
              name={clothing.name}
              category={clothing.category}
              subcategory={clothing.subcategory}
              price={clothing.price}
            />
          );
        })}
      </div>
    </div>
  );
}
