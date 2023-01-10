const Index: React.FC = (): JSX.Element => {
    return (
        <aside className="shadow-md h-screen px-4">
            <span className="text-gray-500">Menu</span>
            <ul className="px-4">
                <li className="py-2 flex gap-2 items-center text-gray-500 text-lg">
                    <span className="material-symbols-outlined">home</span> <a href="">Dashboard</a>
                </li>
                <li className="py-2 flex gap-2 items-center text-gray-500 text-lg">
                    <span className="material-symbols-outlined">category</span><a href="">Category</a>
                </li>
                <li className="py-2 flex gap-2 items-center text-gray-500 text-lg">
                    <span className="material-symbols-outlined">home</span> <a href="">Dashboard</a>
                </li>
                <li className="py-2 flex gap-2 items-center text-gray-500 text-lg">
                    <span className="material-symbols-outlined">category</span><a href="">Category</a>
                </li>
            </ul>
        </aside>
    )
}
export default Index