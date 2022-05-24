import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const PurchaseSteps = () => {
    const[user] = useAuthState(auth);
    return (
        <div>
            <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://i.ibb.co/RyCNjfj/bgimg.webp)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Follow the Simple Steps !</h1>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary">Login / Register</li>
                            <li className="step step-primary">Choose tools</li>
                            <li className="step">Place Order</li>
                            <li className="step">Receive Product</li>
                        </ul>
                        {/* <br/> */}
                        <div>
                            <Link to={`${user?.uid?'/tools':'/login'}`} className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseSteps;