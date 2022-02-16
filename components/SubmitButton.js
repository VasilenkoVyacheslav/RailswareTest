const SubmitButton = ({text, className}) => {
    return <input type="submit" className={className || "button"} value={text} />
}

export default SubmitButton;
