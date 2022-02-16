import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import SubmitButton from "../components/SubmitButton";
import Modal from "../components/Modal";
import Link from "next/link";
import loginImage from "../images/login.svg";

const Login = () => {
    const [openModal, setOpenModal] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <PageWrapper>
            <div className="login">
                <form className="form" onSubmit={submitForm}>
                    <div className="form__image">
                        <img src={loginImage} alt="Login"/>
                    </div>
                    <h1>Welcome Back!</h1>
                    <div className="form__row">
                        <input type="email" className="form__input" placeholder="example@email.com" name="Email" required />
                    </div>
                    <div className="form__row">
                        <input type="password" minLength="4" className="form__input" placeholder="password" name="password" required />
                    </div>
                    <div className="text-right">
                        <Link href="/forgotPassword">
                            <a>Forgot password?</a>
                        </Link>
                    </div>
                    <div className="form__row">
                        <SubmitButton text="Log in" />
                    </div>
                    <p>Or connect with social</p>
                    <div className="justify-space-between">
                        <div className="col-50">
                            <button className="button--small" type="button">Facebook</button>
                        </div>
                        <div className="col-50">
                            <button className="button--small-red" type="button">Google</button>
                        </div>
                    </div>
                </form>
            </div>
            <Modal isOpen={openModal} closeModal={closeModal} title="Logged In!" text="Hello!" />
        </PageWrapper>
    )
};

export default Login;
