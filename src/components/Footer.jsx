import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="w-100 d-flex flex-column justify-content-center bg-dark">
            <div className="row p-5 text-secondary">
                <div className="col">
                    <h4 className="text-light">Media Player 2024</h4>
                    <p className="text-success" style={{ textAlign: 'justify'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="col">
                    <h4 className="text-light">Links</h4>
                    <Link to={'/'} style={{color:'orange'}}>Landing</Link><br />
                    <Link to={'/dash'} style={{color:'orange'}}>Dashboard</Link><br />
                    <Link to={'/his'} style={{color:'orange'}}>History</Link>
                </div>
                <div className="col">
                    <h4 className="text-light">References</h4>
                    <a href="https://react.dev/" target="_blank" style={{color:'orange'}}>React</a><br />
                    <a href="https://getbootstrap.com/" target="_blank" style={{color:'orange'}}>Bootstrap</a><br />
                    <a href="https://react-bootstrap.netlify.app/" target="_blank" style={{color:'orange'}}>React-Bootstrap</a>
                </div>
                <div className="text-center">
                    <p className="text-success"> &copy; Media Player 2024</p>
                </div>

            </div>
        </div>
    )
}

export default Footer