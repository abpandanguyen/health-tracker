import "./UserPage.css";
import AboutApp from "../../components/AboutApp/AboutApp";
import { Link } from "react-router-dom";

export default function UserPage(){
    return (
        <div>
            <div className="card-container">
                <div className="log-card">
                    <Link to='/logs'>
                        <div>Logs</div>
                    </Link>
                </div>
                <div className="prescription-card">
                    <Link to='/prescriptions'>
                        <div>Prescriptions</div>
                    </Link>
                </div>
            </div>
            <>
                <AboutApp />
            </>
        </div>
    )
}