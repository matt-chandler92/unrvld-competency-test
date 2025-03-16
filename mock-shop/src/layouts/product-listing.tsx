/* Time permitting I would only call the product list on page load and cache it
then use that to filter the results.

I would also have implemented the filters as checkboxes instead of radios so that multiple or none of the filters could be selected or a clear feature.
Ultimately something to be discussed with the UX consultant

Finally I would have added a loader in for the grid so that it's clear to the user that they should be waiting for something to load, to reduce the perceived performance*/

import { useState, useEffect, useRef } from "react";
import { Header } from "../components/header";
import { ProductGrid } from "../components/product-grid";
import { ProductCardProps } from "../components/product-card";
import { option } from "../components/filters";

export function ProductListing() {
  const handleFilterChange = async (e: string) => {
    const productsParsed: ProductCardProps[] = [];
    const newProducts = await getProducts(e);

    newProducts.data.collection.products.edges.forEach((product: any) => {
      productsParsed.push({
        range: newProducts.data.collection.title,
        name: product.node.title,
        image: product.node.featuredImage.url,
      });
    });

    setProducts(productsParsed);
  };

  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [categories, setCategories] = useState<option[]>([]);
  const productsRef = useRef<ProductCardProps[]>([]);

  const getProductCategories = async () => {
    const categories: option[] = [];
    const request = await fetch(
      "https://mock.shop/api?query={collections(first:%203){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}"
    );
    const response = await request.json();

    response.data.collections.edges.forEach((item: any) => {
      categories.push({ name: item.node.title, value: item.node.id });
    });
    return categories;
  };

  const getProducts = async (id: string) => {
    const request = await fetch(
      `https://mock.shop/api?query={collection(id:%20%22${id}%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}`
    );
    const response = await request.json();
    return response;
  };

  const initProducts = async (categories: option[]) => {
    const productsParsed: ProductCardProps[] = [];
    for (const category of categories) {
      const newProducts = await getProducts(category.value);

      newProducts.data.collection.products.edges.forEach((product: any) => {
        productsParsed.push({
          range: newProducts.data.collection.title,
          name: product.node.title,
          image: product.node.featuredImage.url,
        });
      });
    }
    if (productsParsed.length) {
      productsRef.current = productsParsed;
      setProducts(productsParsed);
    }
  };

  //If products have already been received then use those rather than refetching everytime the component rehydrates
  useEffect(() => {
    (async () => {
      if (productsRef.current.length === 0) {
        const categories = await getProductCategories();
        setCategories(categories);
        await initProducts(categories);
      } else {
        setProducts(productsRef.current);
      }
    })();
  }, []);

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
          <div className="col-12">{<ProductGrid products={products} />}</div>
        </div>
      </div>
    </>
  );
}
