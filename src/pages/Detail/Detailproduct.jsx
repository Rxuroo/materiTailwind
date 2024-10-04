import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailProduct = () => {
  const { id } = useParams(); // Mendapatkan id dari URL
  const [detailProduct, setDetailProduct] = useState(null);

  const ambilDetailProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = response.data;
      setDetailProduct(data); // Simpan data produk yang diambil dari API
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    ambilDetailProduct();
  }, [id]); // Fetch ulang jika id berubah

  if (!detailProduct) return <p>Loading...</p>; // Menampilkan loading jika data belum diambil

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{detailProduct.title}</h1>
      <img
        className="w-full h-64 object-cover mb-4"
        src={detailProduct.image}
        alt={detailProduct.title}
      />
      <p className="text-lg mb-2">Price: ${detailProduct.price}</p>
      <p className="text-lg mb-2">Category: {detailProduct.category}</p>
      <p className="text-base">{detailProduct.description}</p>
    </div>
  );
};

export default DetailProduct;