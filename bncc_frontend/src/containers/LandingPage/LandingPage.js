import React from "react";
import Particles from "../../components/UI/Particles/Particles";

import Login from "./Login/Login";
import Register from "./Register/Register";

import styles from "./LandingPage.module.css";

function LandingPage({ location }) {
    return (
        <>
            <Particles type="bubble" />
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    {location.state && location.state.register ? (
                        <Register />
                    ) : (
                        <Login />
                    )}
                </div>
            </div>
        </>
    );
}

export default LandingPage;
