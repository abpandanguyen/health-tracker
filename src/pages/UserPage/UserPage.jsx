import "./UserPage.css";
import { Link } from "react-router-dom";

export default function UserPage(){
    return (
        <div class="cardContainer">
            <Link to='/logs'>
                <div>Logs</div>
            </Link>
            <Link to='/prescriptions'>
                <div>Prescriptions</div>
            </Link>
        </div>
    )
}