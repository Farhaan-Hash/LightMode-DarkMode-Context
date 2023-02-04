import {useThemeContext} from "../context/themeContext";
import ReactSwitch from "react-switch";

const SwitchReact = () => {
  const {theme, toggleTheme} = useThemeContext();
  return (
    <>
      <div className="switch">
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>

        <ReactSwitch
          onChange={toggleTheme}
          handleDiameter={28}
          offColor="#08f"
          onColor="#0ff"
          offHandleColor="#0ff"
          onHandleColor="#08f"
          height={40}
          width={70}
          borderRadius={6}
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "orange",
                paddingRight: 2,
              }}
            >
              Off
            </div>
          }
          checkedIcon={
            <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
              <circle r={3} cx={5} cy={5} />
            </svg>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              😔
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "red",
                fontSize: 18,
              }}
            >
              😃
            </div>
          }
          checked={theme === "dark"}
        />
      </div>
    </>
  );
};

export default SwitchReact;
