import { NavLink } from "react-router";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className="flex items-center gap-2">
        <img
          src="https://i.ibb.co.com/PsV4VM0N/Logo-removebg-preview.png"
          className="h-[90px] dark:invert"
          alt="Logo"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
