import PageWrapper from "../components/PageWrapper";
import Link from "next/link";
import SubmitButton from "../components/SubmitButton";
import Modal from "../components/Modal";
import React, { useState } from "react";

const ForgotPassword = () => {
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
            <div className="forgotPassword">
                <form className="form" onSubmit={submitForm}>
                    <div className="form__image">
                        <img src="/images/forgot_password.svg" alt="Forgot Password"/>
                    </div>
                    <h1>Forgot Password</h1>
                    <div className="form__row">
                        <input type="email" className="form__input" placeholder="example@email.com" name="Email" required />
                    </div>
                    <SubmitButton text="Reset" />
                    <p>Already have an account?
                        <Link href="/login">
                            <a> Login here</a>
                        </Link>
                    </p>
                </form>
            </div>
            <Modal isOpen={openModal} closeModal={closeModal} title="Check Your Email" text="We have sent a new password to your email!" />
        </PageWrapper>
    )
};

export default ForgotPassword;
