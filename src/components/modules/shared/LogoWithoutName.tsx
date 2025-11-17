import { NavLink } from "react-router";

const LogoWithoutName = () => {
  return (
    <div>
      <NavLink to="/" className="flex items-center">
        <img
          src="https://i.ibb.co.com/Mxr1CY5z/Logo-removebg.png"
          className="h-[50px] dark:invert "
          alt="Elite Corporation"
        />
        <span className="text-xl font-semibold tracking-tighter">
          Elite Corporation
        </span>
      </NavLink>
    </div>
  );
};

export default LogoWithoutName;
