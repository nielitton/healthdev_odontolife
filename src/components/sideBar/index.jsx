import { ListOfItems, NavItemStyle, SideBarStyled } from "./styled";
import ProfileImage from "../../assets/ProfileImage.svg";
import coolicon from "../../assets/coolicon.svg";
import ellipse from "../../assets/ellipse.png";
import ellipseLeft from "../../assets/ellipseLeft.png";
import { PiHouseFill } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { LuMonitor } from "react-icons/lu";
import { Tooltip } from "../tooltip";
import { useState } from "react";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <SideBarStyled isExpanded={isExpanded}>
      <div className="ellipse-blue">
        {isExpanded ? (
          <Tooltip label="Recuar">
            <img
              onClick={() => setIsExpanded(!isExpanded)}
              src={ellipseLeft}
              alt="Ellipse blue"
            />
          </Tooltip>
        ) : (
          <Tooltip label="Expandir">
            <img
              onClick={() => setIsExpanded(!isExpanded)}
              src={ellipse}
              alt="Ellipse blue"
            />
          </Tooltip>
        )}
      </div>

      <div className="profile-container">
        <div className="image-infos-container">
          <img
            className="image-profile"
            src={ProfileImage}
            alt="imagem de perfil do usuário"
          />
          {isExpanded && (
            <div className="profile-infos">
              <p className="text-title">Pedro Lauro</p>
              <p className="text-profission">Médico</p>
              {isExpanded && (
                <p className="coolicon">
                  <img
                    className="coolicon"
                    src={coolicon}
                    alt="seta para baixo"
                  />
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="title-nav">
        {isExpanded ? (
          <p className="tools-text">Ferramentas</p>
        ) : (
          <p className="tools-text tools-off">.</p>
        )}
      </div>

      <ListOfItems>
        {isExpanded ? (
          <NavItemStyle  isExpanded={isExpanded} firstItem={true}>
              <PiHouseFill className="icon-selected"/>
              <p className="description-nav">Inicio</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle isExpanded={isExpanded}>
            <PiHouseFill />
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle isExpanded={isExpanded}>
              <FaRegAddressCard />
              <p className="description-nav">Consultório</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle isExpanded={isExpanded}>
            <FaRegAddressCard />
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle isExpanded={isExpanded}>
              <BiBuildingHouse />
              <p className="description-nav">Clinicas</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle isExpanded={isExpanded}>
            <BiBuildingHouse />
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle isExpanded={isExpanded}>
              <LuMonitor />
              <p className="description-nav">Painel de atendimento</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle isExpanded={isExpanded}>
            <LuMonitor />
          </NavItemStyle>
        )}
      </ListOfItems>
    </SideBarStyled>
  );
};

export { SideBar };
