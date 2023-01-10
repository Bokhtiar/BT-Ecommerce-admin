type Cardprops = {
    title: string;
    total: number;
    color: string
}
const Index :React.FC<Cardprops> = (props:Cardprops):JSX.Element => {
    return(
        <div className={`shadow-md text-center py-4 text-white rounded-md ${props.color}`}>
            <span className="text-2xl font-bold">{props.total}</span><br />
            <span className="text-xl">{props.title}</span>
        </div>
    )
}
export default  Index