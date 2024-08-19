import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../../../shared/ui/ProfileImage";
import { RootState } from "../../../store/types/types";
import { actionOptions } from "../config/actionOptions";
import { Link } from "react-router-dom";
import { pageOptions } from "../config/pageOptions";

const Settings = ({ status }: { status: boolean }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  return (
    <div
      className={`header__settings ${status ? "header__settings_active" : ""}`}
    >
      <div
        className="px-[14px] py-[12px] flex items-center border-b border-b-[#89929f] justify-between"
        style={{ zIndex: `${status ? "-100" : "100"}` }}
      >
        {user && (
          <div className="flex gap-[5px] items-center overflow-hidden">
            <ProfileImage width="45px" />
            <span>Logged in as {user.displayName}</span>{" "}
          </div>
        )}
      </div>
      <div className="header__settings-option-list">
        {pageOptions.map((option) => (
          <div className="header__settings-option" key={option.id}>
            {option.icon}
            <Link
              to={option.direction}
              className="header__settings-option-text"
            >
              {option.text}
            </Link>
          </div>
        ))}
      </div>
      <div
        className="header__settings-option-list"
        style={{ borderBottom: "none" }}
      >
        {actionOptions.map((option) => (
          <button
            className="header__settings-option"
            key={option.id}
            onClick={() => option.func?.(dispatch)}
          >
            {option.icon}
            <div className="header__settings-option-text">{option.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settings;
