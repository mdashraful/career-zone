import React from "react";
import Lottie from "lottie-react";
import errorAnimation from '../public/50267-error.json';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="mt-48">
                <h1 className="text-center text-3xl text-red-600 font-bold mt-10">Oops!</h1>
                <h2 className="text-center text-2xl text-red-600 font-bold mt-5">{error.statusText || error.message}</h2>
                <Lottie className="h-96 mt-5" animationData={errorAnimation} loop={true}></Lottie>
            </div>
        </div>
    );
}