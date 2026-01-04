const Headline = ({ as: Tag = 'h3', text, className = '', ...props }) => {
    return (
        <Tag className={className} {...props}>
            {text}
        </Tag>
    );
};

export default Headline;
