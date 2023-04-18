import client from "@/lib/sanity";
import { log } from "console";

export default async function Home() {
  
  const query = `*[_type == "clothing"] {name,price,category,subcategory}`;
  const clothing = await client.fetch(query);
  log(clothing);
  
  return (
    <div></div>
  )
}
