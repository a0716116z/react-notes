import Edit from "./components/Edit";
import List from "./components/List";
import Item from "./components/Item";
import { useState ,useEffect } from "react";
import "./index.css";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    window.alert("新增成功")
  },[data])
  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};
export default Home;
