const Navigation = () => {
    return (
           <>
                <div className="w-full bg-gradient-to-r from-violet-800 to-violet-950 flex justify-between items-center shadow-xl">
                    <h1 className="text-[30px] text-white font-bold ml-3">MobiStore</h1>
                    <nav className="space-x-5 text-white font-semibold">
                        <a href="/" className="hover:text-red-400">Home</a>
                        {/* <a href="#" className="hover:text-red-400">Product</a>
                        <a href="#" className="hover:text-red-400">Orders</a> */}
                        <a href="/about" className="hover:text-red-400">About</a>
                        <a href="/contact" className="hover:text-red-400">Contact</a>
                    </nav>
                    <div className="text-white space-x-3">
                        <button className="bg-stone-900 p-2 pl-3 pr-3 rounded-[30px] m-3 hover:bg-white hover:text-stone-900">Login</button>
                        <button className="bg-violet-600 p-2 pl-3 pr-3 rounded-[30px] m-3 hover:bg-white hover:text-stone-900">Sign Up</button>
                    </div>
                </div>
            </>
            );
} 

export default Navigation;