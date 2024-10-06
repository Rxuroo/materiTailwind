import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

const BerandaView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
    const [getTheme] = useContext(ThemeContext); // Mengambil tema aktif dari ThemeContext

    // Helper untuk class tema
    const themeBgClass = getTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
    const cardBgClass = getTheme === 'dark' ? 'bg-gray-800' : 'bg-white';

    return (
        <div className={`beranda ${themeBgClass}`}>
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
                    <div className={`card shadow-md border-none ${cardBgClass}`} key={product?.id}>
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
