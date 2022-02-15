const PageWrapper = ({children}) => {
    return (
        <div className="wrapper">
            <div className="container">
                {children}
            </div>
        </div>
    )
};

export default PageWrapper;