import "./UserPage.css";
import { Link } from "react-router-dom";

export default function UserPage(){
    return (
        <div class="cardContainer">
            <Link to='/logs'>
                <div>Log History</div>
            </Link>
            <Link to='/logs/new'>
                <div>New Log</div>
            </Link>
            <Link to='/prescriptions'>
                <div>Prescription History</div>
            </Link>
            <Link to='/prescriptions/new'>
                <div>New Prescription</div>
            </Link>
        </div>
    )
}