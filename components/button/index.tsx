type ButtonProps = {
    name:string,
}

export const PrimaryButton: React.FC<ButtonProps> = (props:ButtonProps):JSX.Element =>{
    return(
        <button className="py-3 bg-orange-600 text-white text-semibold px-8 text-xl rounded-md">
            {props.name}
        </button>
    )
}