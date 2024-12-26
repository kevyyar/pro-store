import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export default async function Home() {
  return (
    <div>
      <h1>Pro Store</h1>
      <ProductList
        data={sampleData.products}
        title="Featured Products"
        limit={4}
      />
    </div>
  );
}
