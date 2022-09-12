import "./UserPage.css";
import AboutApp from "../../components/AboutApp/AboutApp";
import { Link } from "react-router-dom";

export default function UserPage(){
    return (
        <div>
            <div className="cardContainer">
                <Link to='/logs'>
                    <div>Logs</div>
                </Link>
                <Link to='/prescriptions'>
                    <div>Prescriptions</div>
                </Link>
            </div>
            <>
                <AboutApp />
            </>
        </div>
    )
}