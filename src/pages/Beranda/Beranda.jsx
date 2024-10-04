import axios from "axios";
import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";
import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";
import { useReducer } from "react";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) =>{
  switch (action.type){
    case "FECTH_BERHASIL":
      return{
        ...state,
        data:action.payload,
        loading: false,
      };
      case "SET_FILTER" :
        return{
          ...state,
          filterData:action.payload
        };
      default:
        throw new Error("error di case")   
  }
};

const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  // const [product, setProduct] = useState();
  // const [hasilCari, setHasilCari] = useState();
  const [cari, setCari] = useSearchParams();
  const cariProduct = cari.get("cariproduct");
  const ambilProduct = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    // setProduct(data);
    dispatch({type:"FECTH_BERHASIL", payload:data})
  };

  useEffect(() => {
    if (!cariProduct) {
      ambilProduct();
    } else {
      ubahCari(cariProduct);
    }
    // ambilProduct();
  }, [cariProduct]);

  const ubahCari = useCallback(async (input) => {
    setCari({ cariproduct: input });

    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/search?q=" + cariProduct
    );
    const data = await response.data;
    // setHasilCari(data);
    dispatch({ type: "SET_FILTER", payload:data});
  },
  [cariProduct]
)

  const hasilFilter = cariProduct ? state.filterData : state.data;

console.log(state)

  return (
    <BerandaView
      cariProduct={cariProduct}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Beranda;