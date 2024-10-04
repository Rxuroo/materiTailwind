import axios from "axios";
import { useEffect, useState, useCallback, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import NegaraView from "./NegaraView";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

const Negara = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);
  const [cari, setCari] = useSearchParams();
  const [inputCari, setInputCari] = useState(""); // State untuk input pencarian
  const cariProduct = cari.get("cariproduct");

  const ambilProduct = async () => {
    const response = await axios.get("https://freetestapi.com/api/v1/countries");
    const data = await response.data;
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  useEffect(() => {
    if (!cariProduct) {
      ambilProduct();
    } else {
      ubahCari(cariProduct);
    }
  }, [cariProduct]);

  const ubahCari = useCallback(
    async (input) => {
      setCari({ cariproduct: input });

      const response = await axios.get(
        "https://freetestapi.com/api/v1/countries?search=" + input
      );
      const data = await response.data;
      dispatch({ type: "SET_FILTER", payload: data });
    },
    [setCari]
  );

  const handleSearch = () => {
    if (inputCari.trim()) {
      ubahCari(inputCari);
    }
  };

  const hasilFilter = cariProduct ? state.filterData : state.data;

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputCari}
          onChange={(e) => setInputCari(e.target.value)}
          placeholder="Cari negara..."
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded-md p-2"
        >
          Search
        </button>
      </div>

      <NegaraView
        cariProduct={cariProduct}
        hasilCari={state.filterData}
        hasilFilter={hasilFilter}
        ubahCari={ubahCari}
      />
    </div>
  );
};

export default Negara;
