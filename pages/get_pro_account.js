import PageWrapper from "../components/PageWrapper";
import SubmitButton from "../components/SubmitButton";
import Modal from "../components/Modal";
import React, {useState} from "react";
import InputMask from "react-input-mask";

const GetProAccount = () => {
    const [openModal, setOpenModal] = useState(false);
    const [cvc, setCvc] = useState("");
    const [expiry, setExpiry] = useState("");
    const [number, setNumber] = useState("");
    const [zipCode, setZipCode] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        setCvc('');
        setExpiry('');
        setNumber('');
        setZipCode('');
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <PageWrapper>
            <div className="getProAccount">
                <form className="form" onSubmit={submitForm}>
                    <div className="form__image">
                        <img src="/images/get_pro_account.svg" alt="Get Pro Account"/>
                    </div>
                    <h1>Get Pro Account</h1>
                    <div className="form__row">
                        <InputMask
                            mask="9999 9999 9999 9999"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            maskChar=" "
                        >
                            {() => <input type="text" className="form__input" placeholder="Card Number" name="cardNumber" required/>}
                        </InputMask>
                    </div>
                    <div className="form__row">
                        <div className="justify-space-between">
                            <div className="col-50">
                                <InputMask
                                    mask="99/99"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    maskChar=" "
                                >
                                    {() => <input type="text" className="form__input" placeholder="MM/YY" name="cardExpireDate" required />}
                                </InputMask>
                            </div>
                            <div className="col-50">
                                <InputMask
                                    mask="999"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    disabled={false}
                                    maskChar=" "
                                >
                                    {() => <input type="text" className="form__input" placeholder="CVV" name="cardCVV" required />}
                                </InputMask>
                                <div className="form__clue">
                                    What's this?
                                    <span className="form__clue-text">See 3 digits on the back of a bank card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form__row">
                        <InputMask
                            mask="999999"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            disabled={false}
                            maskChar=" "
                        >
                            {() => <input type="text" className="form__input" placeholder="ZIP/Postal Code" name="zipCode" required />}
                        </InputMask>
                    </div>
                    <SubmitButton className="button--red" text="Upgrade" />
                </form>
            </div>
            <Modal isOpen={openModal} closeModal={closeModal} title="Congratulations!" text="Now you are a PRO!" />
        </PageWrapper>
    )
};

export default GetProAccount;
