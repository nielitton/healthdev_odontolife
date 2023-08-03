import { ListOfItems, NavItemStyle, SideBarStyled } from "./styled";
import ProfileImage from "../../assets/ProfileImage.svg";
import coolicon from "../../assets/coolicon.svg";
import ellipse from "../../assets/ellipse.png";
import ellipseLeft from "../../assets/ellipseLeft.png";
import chat from "../../assets/chat.svg";
import { PiHouseFill } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { BiHelpCircle } from "react-icons/bi";
import { LuMonitor } from "react-icons/lu";
import { GoGear } from "react-icons/go";
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
          <NavItemStyle className="firstItem" isExpanded={isExpanded} firstItem={true}>
            <PiHouseFill className="icon-selected" />
            <p className="description-nav">Inicio</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Inicio" side="right">
              <PiHouseFill className="icon" />
            </Tooltip>
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <FaRegAddressCard />
            <p className="description-nav">Consultório</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Consultório" side="right">
              <FaRegAddressCard className="icon" />
            </Tooltip>
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <BiBuildingHouse />
            <p className="description-nav">Clinicas</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Clinicas" side="right">
              <BiBuildingHouse  className="icon" />
            </Tooltip>
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <LuMonitor />
            <p className="description-nav">Painel de atendimento</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Central de atendimento" side="right">

            <LuMonitor className="icon"/>
            </Tooltip>
          </NavItemStyle>
        )}
      </ListOfItems>

      <ListOfItems>
      {isExpanded ? (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <MdOutlineNotificationsNone className="icon-selected" />
            <p className="description-nav">Notificações</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Central de ajuda" side="right">
              <MdOutlineNotificationsNone className="icon" />
            </Tooltip>
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <BiHelpCircle className="icon-selected" />
            <p className="description-nav">Central de ajuda</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Central de ajuda" side="right">
              <BiHelpCircle className="icon" />
            </Tooltip>
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <GoGear className="icon-selected" />
            <p className="description-nav">Configurações</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Configurações" side="right">
              <GoGear className="icon" />
            </Tooltip>
          </NavItemStyle>
        )}
        {isExpanded ? (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Sair da conta" side="right">
              <HiMiniArrowLongLeft className="icon icon-selected" />
            </Tooltip>
            <p className="description-nav">Sair</p>
          </NavItemStyle>
        ) : (
          <NavItemStyle className="another-item" isExpanded={isExpanded}>
            <Tooltip label="Sair" side="right">
              <HiMiniArrowLongLeft className="icon" />
            </Tooltip>
          </NavItemStyle>
        )}
      </ListOfItems>

      <div className="chat-container">
        <img src={chat} alt="chat-image" />
      </div>
    </SideBarStyled>
  );
};

export { SideBar };
