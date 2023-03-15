"use client";
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import clsx from "clsx";

function SubcategoryNav({ params }: { params: { category: string } }) {
  const { category } = params;
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  console.log(category, segment, pathname);
  const val = true;

  const subcategories = [
    {
      label: "women",
      items: [
        { slug: "all", text: "All" },
        { slug: "skirts", text: "Skirts" },
        { slug: "blouses", text: "Blouses" },
      ],
    },
    {
      label: "men",
      items: [
        { slug: "all", text: "All" },
        { slug: "shorts", text: "Shorts" },
        { slug: "denims", text: "Denims" },
      ],
    },
    {
      label: "kids",
      items: [
        { slug: "all", text: "All" },
        { slug: "shorts", text: "Shorts" },
        { slug: "shirts", text: "Shirts" },
      ],
    },
  ];

  console.log(subcategories);


  /*

  if (category === "women") {
    return (
      <div className="w-full flex flex-row flex-nowrap gap-x-2 items-center overflow-x-scroll scrollbar-hidden h-auto my-2">
        {subcategories["women"].map((sub, i) => {
          return (
            <div key={i} className="border border-black px-2 py-1 rounded-md">
              {sub.text}
            </div>
          );
        })}
      </div>
    );
  }

  if (category === "men") {
    return (
      <div className="w-full flex flex-row flex-nowrap gap-x-2 items-center overflow-x-scroll scrollbar-hidden h-auto my-2">
        <div className="border border-black px-2 py-1 rounded-md">All</div>
        <div className="border border-black px-2 py-1 rounded-md">Shorts</div>
        <div className="border border-black px-2 py-1 rounded-md">Denims</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-row flex-nowrap gap-x-2 items-center overflow-x-scroll scrollbar-hidden h-auto my-2">
      <div className="border border-black px-2 py-1 rounded-md">All</div>
      <div className="border border-black px-2 py-1 rounded-md">Shorts</div>
      <div className="border border-black px-2 py-1 rounded-md">Shirts</div>
    </div>
  );
}
*/
}
export default SubcategoryNav;
