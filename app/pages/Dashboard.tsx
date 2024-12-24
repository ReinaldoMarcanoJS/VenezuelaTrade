import { CiShoppingCart } from "react-icons/ci";
import { GridProducts } from "../components/GridProducts";
import { Navbar } from "../components/Navbar";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import { Categories } from "../components/Categories";
import { CategoriesDasboard } from "../components/Categories-dasboard";

const Dashboard = () => {


  
  return (
    <div className="container min-h-scree m-auto">
      
      <Navbar/>


      <div className="min-h-screen m-auto container px-3 md:px-20">
      <Categories/>
      <CategoriesDasboard/>
      <GridProducts/>
      </div>
      
    </div>
  );
};

export default Dashboard;
