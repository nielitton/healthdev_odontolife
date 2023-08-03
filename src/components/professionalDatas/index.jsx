import Select from "react-select";
import { Button, FormLineStyle, InputStyle } from "../generalDatas/style";
import { useForm } from "react-hook-form";
import { Switch } from "../switch";
import { CustomSelect } from "../select";

const ProfessionalDatas = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form>
        <FormLineStyle>
          <div>
            <p className="text-title">Informações pessoais</p>
            <p>Atualize sua foto e dados pessoais aqui</p>
          </div>
          <Button>Editar</Button>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Conselho / Estado conselho</p>
          <div className="separated-inputs">
            <CustomSelect />
            <CustomSelect />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Número do conselho</p>
          <div className="separated-inputs">
            <InputStyle
              className="just-one"
              type="text"
              {...register("complement")}
            />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Especialidade / RQE</p>
          <div className="separated-inputs">
            <CustomSelect />
            <InputStyle type="number" />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">ID user / Sincronização MEMED</p>
          <div className="separated-inputs">
            <CustomSelect />
            <Switch/>
          </div>
        </FormLineStyle>
      </form>
    </div>
  );
};

export { ProfessionalDatas };
