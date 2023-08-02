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
        <p>&#709;</p>
      </div>
    </HeaderStyle>
  );
};

export { Header };
