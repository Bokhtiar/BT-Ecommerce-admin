import authRoute from "../../hook/authRouter"

const Dashboard:React.FC = ():JSX.Element => {
    return (
        <div>Dashboard home page</div>
    )
}

export default authRoute(Dashboard)