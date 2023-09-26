import { NavLink } from "react-router-dom";
const Header = () => {
    const links = <>
    <ol> <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }>Home</NavLink></ol>
    <ol> <NavLink to="/donation" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }>Donation</NavLink></ol>
    <ol> <NavLink to="/statistics" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }>Statistics</NavLink></ol>
   </>

    return (
        <div className="flex justify-between shadow-md px-4 py-4">
            <div>
                <img src="https://i.ibb.co/HdmqqSj/Logo.png" alt="" />
            </div>
            <div className="flex gap-5">
                {links}
            </div>
        </div>
    );
};

export default Header;