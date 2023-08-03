import { HeaderStyle } from "./style";
import { GoHome } from "react-icons/go";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { Tooltip } from "../tooltip";

const pegarDiaAtual = () => {
  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const mesesAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const dataAtual = new Date();
  const diaSemana = diasSemana[dataAtual.getDay()];
  const diaMes = dataAtual.getDate();
  const mesAno = mesesAno[dataAtual.getMonth()];
  const ano = dataAtual.getFullYear();

  return `${diaSemana}, ${diaMes} de ${mesAno} de ${ano}`;
};

const Header = () => {
  const dataDeHoje = pegarDiaAtual();

  return (
    <HeaderStyle>
      <div>
        <div>
          <div className="path-page">
            <GoHome />
            <span>&#62;</span>
            <span>Inicio</span>
            <span>&#62;</span>
            <span className="blue">Perfil</span>
          </div>
          <p className="text-title">{dataDeHoje}</p>
        </div>
      </div>
      <div className="right-infos">
        <div className="icons-container">
          <Tooltip label="Configurações">
            <GoGear className="icon" />
          </Tooltip>
          <Tooltip label="Notificações">
            <MdOutlineNotificationsNone className="icon" />
          </Tooltip>
        </div>
        <div className="infos-container">
          <p className="text-title">Clinica Odontolife</p>
          <p>Unidade 2 - Consultorio 1</p>
        </div>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.9998 15.713L18.0098 9.70202L16.5958 8.28802L11.9958 12.888L7.40277 8.28802L5.98877 9.70202L11.9998 15.713Z"
              fill="#909090"
            />
          </svg>
        </p>
      </div>
    </HeaderStyle>
  );
};

export { Header };
