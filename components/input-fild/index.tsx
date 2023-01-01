type InputProps = {
    label :string;
    type:string;
    name: string;
    placeholder: string;
}

const InputFild:React.FC<InputProps> = (props:InputProps):JSX.Element => {
    return (
       <div className='my-3'>
            <label htmlFor="" className='text-xl font-semibold'>{props.label}</label>
            <input className='w-full py-2 border border-gray-500 hover:border-gray-400 px-4 rounded-md focus:outline-none' type={props.type} name={props.name} placeholder={props.placeholder} />
       </div>
    )
}

export default InputFild;