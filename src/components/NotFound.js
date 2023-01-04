import * as React from "react";
import notFoundLogo from "../assets/404.gif"
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="notFoundPage">
            <img src={notFoundLogo} width={400} alt="404-images"></img>
            <button>
                <Link to="/v1">Go to Home </Link>
            </button>
        </div>
    );
}
