const Button = ({ text, clasName = '', ...props }) => {
    return (
        <button className={clasName} {...props}>
            {text}
        </button>
    );
};

export default Button;
