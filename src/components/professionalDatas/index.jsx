import { FormLineStyle, InputStyle } from "../generalDatas/style";
import { useForm } from "react-hook-form";
import { Switch } from "../switch";
import { CustomSelect } from "../select";
import { ButtonsEditMode } from "../buttonsEditMode";
import { useState } from "react";

const ProfessionalDatas = () => {
  const { register, handleSubmit } = useForm();
  const [ editMode, setEditMode ] = useState(false)

  const handleFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormLineStyle>
          <div>
            <p className="text-title">Informações pessoais</p>
            <p>Atualize sua foto e dados pessoais aqui</p>
          </div>
          <ButtonsEditMode editMode={editMode} setEditMode={setEditMode}>Salvar</ButtonsEditMode>
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
              {...register("adviceNumber")}
            />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Especialidade / RQE</p>
          <div className="separated-inputs">
            <CustomSelect />
            <InputStyle type="number" { ...register('rqe') }/>
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
