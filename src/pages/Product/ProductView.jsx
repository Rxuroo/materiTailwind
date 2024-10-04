import React from 'react';
import { Link } from 'react-router-dom';

const ProductView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
  return (
    <div className="Product">
      {/* Input pencarian produk */}
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <input
          type="text"
          className="grow p-2 border rounded-md"
          placeholder="Search"
          onChange={(input) => ubahCari(input.target.value)} // Mengubah hasil pencarian
        />
      </label>
      
      <p>
        Hasil dari: {cariProduct}, ditemukan: {hasilCari?.length}
      </p>

      {/* Grid produk dengan 3 kolom di layar sedang dan besar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hasilFilter?.map((product) => (
          <div className="card bg-base-100 shadow-xl" key={product?.id}>
            <figure className="p-4">
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold mb-2">
                {product.title}
              </h2>
              <p className="text-sm line-clamp-2 overflow-hidden text-ellipsis">
                {product.description}
              </p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={"/detail/" + product.id} // Mengarahkan ke halaman detail produk
                  className="btn btn-primary"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;