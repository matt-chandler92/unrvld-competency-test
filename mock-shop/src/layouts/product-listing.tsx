import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { ProductGrid } from "../components/product-grid";
import { option } from "../components/filters";

interface ProductListingProps {
  category?: string;
}
export function ProductListing({ category }: ProductListingProps) {
  const handleFilterChange = (e: string) => {
    console.log(`category: ${e}`);
  };

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState<option[]>([]);

  const getProductCategories = async () => {
    const categories: option[] = [];
    const request = await fetch(
      "https://mock.shop/api?query={collections(first:%203){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}"
    );
    const response = await request.json();

    response.data.collections.edges.forEach((item: any) => {
      categories.push({ name: item.node.title, value: item.node.id });
    });
    console.log(categories);

    setCategories(categories);
  };

  useEffect(() => {
    if (!categories.length) {
      getProductCategories();
    }
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <Header
              size="small"
              category="Spring summer 24"
              heading="Explore the range"
              filters={{
                options: categories,
                onChange: handleFilterChange,
              }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {products && <ProductGrid products={products} />}
          </div>
        </div>
      </div>
    </>
  );
}
