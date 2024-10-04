import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductView from "./ProductView";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [hasilCari, setHasilCari] = useState([]);
  const [cari, setCari] = useSearchParams();
  const cariProduct = cari.get("cariproduct");

  const ambilProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response.data;
    setProduct(data);
    setHasilCari(data); // Default tampilkan semua produk
  };

  useEffect(() => {
    ambilProduct();
  }, []);

  const ubahCari = (input) => {
    setCari({ cariproduct: input });

    // Filter produk secara manual berdasarkan input
    if (input) {
      const filtered = product.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setHasilCari(filtered);
    } else {
      setHasilCari(product); // Kembalikan semua produk jika input kosong
    }
  };

  const hasilFilter = cariProduct ? hasilCari : product;

  return (
    <ProductView
      cariProduct={cariProduct}
      hasilCari={hasilCari}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Product;