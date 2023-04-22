import MyCarousel from "../components/MyCarousel";
import { Link } from "react-router-dom";
function Dashboard () {
  return (
    <>
    <Link to="/letter"> Entra aquí!</Link>
    <h1>Dashboard</h1>
    <MyCarousel />
    </>
    
  )
}

export default Dashboard;
