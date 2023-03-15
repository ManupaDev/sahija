import SubcategoryNav  from "./subcategory-nav";
import CategoryNav from "../components/categorynav";
import client from "@/lib/sanity";

async function CategoryPageLayout({ params, children }: { params: { category: string }; children: React.ReactNode }) {
  return (
    <div className="border border-black px-4 py-4">
      <h1 className="font-semibold text-2xl">Shop</h1>
      <CategoryNav segment={params.category} />
      <SubcategoryNav params={params}/>
      {children}
    </div>
  );
}

export default CategoryPageLayout;
