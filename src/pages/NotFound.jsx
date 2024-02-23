import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <section className="h-full">
            <div className="container mx-auto w-2/3 flex flex-col md:flex-row justify-center items-center">
                <img src="https://thumbs.dreamstime.com/b/page-not-found-error-hand-drawn-ghost-doodle-vector-illustration-internet-connection-trouble-concept-105206287.jpg" alt="Not Found" className="w-1/2" />
                <div className="flex flex-col justify-center md:justify-start">
                    <h2 className="text-6xl text-slate-600 font-extrabold">404</h2>
                    <h4 className="text-2xl text-slate-400 font-semibold text-center md:text-left my-4">The page you have looking for doesn't exist!</h4>
                    <p className="text-base text-center md:text-left text-red-500 font-semibold mb-4">{error?.statusText || error?.message}</p>
                    <Link to="/">
                        <button className="btn bg-[#094C41] hover:bg-[#094C41] text-white rounded px-6 tracking-wide">Back to Home!</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;