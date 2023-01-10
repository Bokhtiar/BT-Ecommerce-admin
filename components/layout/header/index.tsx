const Index: React.FC = (): JSX.Element => {
    return (
        <nav className="flex justify-between items-center shadow-md px-4">
            <div className="w-[1/6] flex gap-2 items-center">
                <img className="mx-auto my-4 h-8" src="/logo.png" alt="" />
                <span className="font-bold text-orange-600">BT-Ecommerce</span>
            </div>

            <div className="w-[4/6]">
                <input type="text" className="hidden md:block md:w-[720px] py-2 px-4 focus:outline-none border border-gray-400 rounded-md " placeholder="search" name="" id="" />
            </div>

            <div className="w-[1/6]">
                <img className="h-12" src="/avater.jfif" alt="" />
            </div>
        </nav>
    )
}
export default Index