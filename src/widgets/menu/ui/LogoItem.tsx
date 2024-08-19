import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LogoItem = () => {
  return (
    <li>
      <Link
        to="/vaults/my_vault"
        className="flex items-center py-[24.5px] px-[17.5px] gap-[7px]"
      >
        <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-accent">
          <FaShieldAlt className="text-primary text-[20px]" />
        </div>
        <span className="text-white">Password Manager</span>
      </Link>
    </li>
  );
};
