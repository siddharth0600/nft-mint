import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./components/Punklist";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xA6e26c8869587bD881873dE73e4937072Ea5Fa49&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />

      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
