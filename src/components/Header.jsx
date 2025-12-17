import { Link } from "react-router";

const Header = () => {
    return (
        <>
        <div className=" flex justify-center p-5 shadow-xl bg-slate-700">
            <nav className="space-x-5 text-white font-semibold">
                <Link to="/" className="hover:text-red-400">Home</Link>
                <Link to="/products" className="hover:text-red-400">Products</Link>
                <Link to="/blogs" className="hover:text-red-400">Blogs</Link>
                <Link to="/about" className="hover:text-red-400">About</Link>
                <Link to="/contact" className="hover:text-red-400">Contact</Link>
                <Link to="/login" className="hover:text-red-400">Login</Link>
            </nav>
            </div>
        </>
    )
}

export default Header;