import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./footer.css";
import documentIcon from "../../assets/directory_open_file_mydocs-5.png";
import favoraitIcon from "../../assets/directory_favorites_small-5.png";
import programIcon from "../../assets/appwizard-4.png";
import settingIcon from "../../assets/server_gear-1.png";
import notepadIcon from "../../assets/notepad.png";
import shutdownIcon from "../../assets/shut_down_cool-5.png";
import runIcon from "../../assets/application_hourglass-0.png";
import keyboardMouse from '../../assets/accessibility_kbd_mouse.png'

const Footer = () => {
  const [isStartClicked, setStartClick] = useState(false);
  const [startCss, setStartCss] = useState("start-btn ");
  const [startMenuCss, setStartMenuCss] = useState("start-menu start-shadow");
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    if (isStartClicked === true) {
      setStartCss("start-btn start-shadow-inverse ");
      setStartMenuCss("start-menu start-shadow");
    } else {
      setStartCss("start-btn start-shadow ");
      setStartMenuCss("start-menu start-shadow hidden");
    }
  }, [isStartClicked]);

  useEffect(()=>{
    const timerid = setInterval(refreshDate, 1000)
    return function cleanup(){
      clearInterval(timerid)
    }
  },[])

  useEffect(() => {
    const handlekeydown = (e) => {
      switch (e.keyCode) {
        case 80:
          document
            .getElementById("item1")
            .classList.add("background-menu-item");
          break;
        case 70:
          document
            .getElementById("item2")
            .classList.add("background-menu-item");
          break;
        case 78:
          document
            .getElementById("item3")
            .classList.add("background-menu-item");
          break;
        case 68:
          document
            .getElementById("item4")
            .classList.add("background-menu-item");
          break;
        case 82:
          document
            .getElementById("item6")
            .classList.add("background-menu-item");
          break;
        case 83:
          document
            .getElementById("item5")
            .classList.add("background-menu-item");
          break;
        default:
          break;
      }
    };

    const handlekeyup = (e) => {
      switch (e.keyCode) {
        case 80:
          document
            .getElementById("item1")
            .classList.remove("background-menu-item");
          break;
        case 70:
          document
            .getElementById("item2")
            .classList.remove("background-menu-item");
          break;
        case 78:
          document
            .getElementById("item3")
            .classList.remove("background-menu-item");
          break;
        case 68:
          document
            .getElementById("item4")
            .classList.remove("background-menu-item");
          break;
        case 83:
          document
            .getElementById("item5")
            .classList.remove("background-menu-item");
          break;
        case 82:
          document
            .getElementById("item6")
            .classList.remove("background-menu-item");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handlekeydown);
    window.addEventListener("keyup", handlekeyup);

    return () => {
      window.removeEventListener("keydown", handlekeydown);
      window.addEventListener("keyup", handlekeyup);
    };
  }, []);

  const refreshDate = () =>{
    setDate(new Date())
  }

  const handleMenuClickDown = (e) => {
    var id = e.target.id;
    document.getElementById(id).classList.add("background-menu-item");
  };
  const handleMenuClickUp = (e) => {
    var id = e.target.id;
    document.getElementById(id).classList.remove("background-menu-item");
  };

  return (
    <footer className="windows-box-shadow">
      <div className={startMenuCss}>
        <div>
          <span>Windows</span>98
        </div>
        <div className="start-menu-items">
          <div
            onMouseDown={handleMenuClickDown}
            onMouseUp={handleMenuClickUp}
            id="item1"
          >
            <img src={documentIcon} alt="" />
            <p>Programs</p>
          </div>
          <div
            onMouseDown={handleMenuClickDown}
            onMouseUp={handleMenuClickUp}
            id="item2"
          >
            <img src={favoraitIcon} alt="" />
            <p>Favorait</p>
          </div>
          <div
            onMouseDown={handleMenuClickDown}
            onMouseUp={handleMenuClickUp}
            id="item3"
          >
            <img src={notepadIcon} alt="" />
            <p>Notepad</p>
          </div>
          <div
            onMouseDown={handleMenuClickDown}
            onMouseUp={handleMenuClickUp}
            id="item4"
          >
            <img src={programIcon} alt="" />
            <p>Documents</p>
          </div>
          <div
            onMouseDown={handleMenuClickDown}
            onMouseUp={handleMenuClickUp}
            id="item5"
          >
            <img src={settingIcon} alt="" />
            <p>Settings</p>
          </div>
          <div
            onMouseDown={handleMenuClickDown}
            onMouseUp={handleMenuClickUp}
            id="item6"
          >
            <img src={runIcon} alt="" />
            <p>Run</p>
          </div>
          <div
            onMouseDown={handleMenuClickDown}
            onMouseUp={handleMenuClickUp}
            id="item7"
          >
            <img src={shutdownIcon} alt="" />
            <p>Shut Down</p>
          </div>
        </div>
      </div>
      <button
        className={startCss}
        onClick={() => setStartClick(!isStartClicked)}
      >
        <img src={logo} alt="thumbnail" />
        <span>Start</span>
      </button>
      <div className="taskbar start-shadow-inverse" >
        <img src={keyboardMouse} alt="" />
        <div>{date.toLocaleTimeString()}</div>
      </div>
    </footer>
  );
};

export default Footer;
