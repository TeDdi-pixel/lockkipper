import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../../shared/ui/ProfileImage";
import { accountOptions, optionList } from "../../widgets/header/config";
import { RootState } from "../../store/types/types";

const Settings = ({ status }: { status: boolean }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  return (
    <div
      className={`header__settings ${status ? "header__settings_active" : ""}`}
    >
      <div className="header__settings-user-data">
        <ProfileImage />
        {user && <span>Logged in as {user.displayName} </span>}
      </div>
      <div className="header__settings-option-list">
        {optionList.map((option) => (
          <div className="header__settings-option" key={option.id}>
            {option.icon}
            <div className="header__settings-option-text">{option.text}</div>
          </div>
        ))} 
      </div>
      <div
        className="header__settings-option-list"
        style={{ borderBottom: "none" }}
      >
        {accountOptions.map((option) => (
          <button
            className="header__settings-option"
            key={option.id}
            onClick={() => option.func && option.func(dispatch)}
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
