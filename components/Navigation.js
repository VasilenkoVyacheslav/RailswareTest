import PageWrapper from "./PageWrapper";
import Link from "next/link";

const Navigation = () => {
    return (
        <PageWrapper>
            <nav className="navigation">
                <div className="navigation__wrapper">
                    <Link href="/login"><a className="navigation__link">Login Form</a></Link>
                    <Link href="/forgot_password"><a className="navigation__link">Forgot Password</a></Link>
                    <Link href="/get_pro_account"><a className="navigation__link">Get Pro Account</a></Link>
                </div>
            </nav>
        </PageWrapper>
    );
}

export default Navigation;
