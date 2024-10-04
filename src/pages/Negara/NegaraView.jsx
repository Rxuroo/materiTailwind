import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const NegaraView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
  try {
    return (
      <div className="beranda">
        {/* Beranda */}

        <label className="input input-bordered flex items-center">
          <input
            type="text"
            className="grow cari"
            placeholder="Search"
            onChange={(input) => ubahCari(input.target.value)}
          />
        </label>
        <p>
          Hasil dari : {cariProduct}, ditemukan : {hasilCari?.founded}
        </p>

        <div className="grid grid-cols-3 gap-4">
          {hasilFilter?.map((product, index) => (
            <div className="card bg-base-100 w-96 shadow-xl" key={index}>
              <figure>
                <img
                  src={product.flag}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <h2 className="card-title">{product.currency}</h2>
                <p className="line-clamp-3">{product.population}</p>
                <div className="card-actions justify-end">
                <Link
                 to={`/rincian/${product.id}`}
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
  } catch (error) {
    console.log(error);
  }
};
export default NegaraView;