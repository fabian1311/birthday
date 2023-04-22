import MyCarousel from "../components/MyCarousel";
import { Link } from "react-router-dom";
import "./../styles/dashboard.css"
function Dashboard () {
  return (
    <div className="container-dash">
    <Link to="/letter" className="buttonLetter"> Entra aquí!</Link>
    <h1> Nuestros bonitos recuerditos </h1>
    <MyCarousel />

    <Link to ="/home" className="buttonHome">Salir</Link>
    </div>
    
  )
}

export default Dashboard;
