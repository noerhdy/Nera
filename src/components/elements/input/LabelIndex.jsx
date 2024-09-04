const Label = (props) => {
    const { children, htmlFor} =props;
    return(
        <label htmlFor={htmlFor}
        className="block text-zinc-800 dark:text-white text-sm font-medium  mb-2">
        {children}
        </label>
       
    )
}

export default Label;