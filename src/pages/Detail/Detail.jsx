import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const { id } = useParams();
    const [detailProduct, setDetailProduct] = useState(null);

    const ambilDetailProduct = async () => {
        const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`);
        const data = await response.data;
        setDetailProduct(data.restaurant); // Pastikan untuk menyesuaikan struktur data
    };

    useEffect(() => {
        ambilDetailProduct();
    }, [id]);

    if (!detailProduct) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{detailProduct.name}</h1>
            <img 
                className="w-full h-64 object-cover mb-4" 
                src={`https://restaurant-api.dicoding.dev/images/medium/${detailProduct.pictureId}`} 
                alt={detailProduct.name} 
            />
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 p-2 text-left">Detail</th>
                        <center><th className="border border-gray-200 p-2 text-left">Info</th></center>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-200 p-2">Deskripsi</td>
                        <td className="border border-gray-200 p-2">{detailProduct.description}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-2">Rating</td>
                        <td className="border border-gray-200 p-2">{detailProduct.rating}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-2">Alamat</td>
                        <td className="border border-gray-200 p-2">{detailProduct.address}</td>
                    </tr>
                    {/* Tambahkan detail lainnya sesuai dengan struktur data */}
                </tbody>
            </table>
        </div>
    );
};

export default Detail;
