import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) console.error(error);
    else setProducts(data);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Rp {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
