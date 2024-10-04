import React from 'react';
import { Link } from 'react-router-dom';

const BerandaView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
    return (
        <div className="beranda dark:bg-black">
            <label className="input input-bordered flex items-center gap-2 mb-4">
                <input
                    type="text"
                    className="grow p-2 border rounded-md"
                    placeholder="Search"
                    onChange={(input) => ubahCari(input.target.value)}
                />
            </label>
            <p>
                Hasil dari: {cariProduct}, ditemukan: {hasilCari?.founded}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {hasilFilter?.restaurants?.map((product) => (
                    <div className="card bg-base-100 shadow-md border-none" key={product?.id}>
                        <figure>
                            <img
                                src={'https://restaurant-api.dicoding.dev/images/small/' + product.pictureId}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="line-clamp-3">{product.description}</p>
                            <div className="card-actions justify-end">
                                <Link
                                    to={"/detail/" + product.id}
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
}

export default BerandaView;
