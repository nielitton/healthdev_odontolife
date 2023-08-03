import { FormLineStyle, InputStyle } from "../generalDatas/style";
import { useForm } from "react-hook-form";
import { CustomSelect } from "../select";
import { ButtonsEditMode } from "../buttonsEditMode";
import { useState } from "react";

const Adress = () => {
    const [ editMode, setEditMode ] = useState(false)
    const { register, handleSubmit } = useForm()

    const formSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormLineStyle>
          <div>
            <p className="text-title">Informações pessoais</p>
            <p>Atualize sua foto e dados pessoais aqui</p>
          </div>
          <ButtonsEditMode editMode={editMode} setEditMode={setEditMode}>Salvar</ButtonsEditMode>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Nascimento / Sexo</p>
          <div className="separated-inputs">
            <CustomSelect />
            <CustomSelect />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Logradouro / Número / Bairro</p>
          <div className="separated-inputs">
            <InputStyle type="text"  {...register("street")} />
            <InputStyle type="number" {...register('home-number')}/>
            <InputStyle type="text" {...register('district')}/>
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Complemento</p>
          <div className="separated-inputs">
            <InputStyle className="just-one" type="text" {...register('complement')}/>
          </div>
        </FormLineStyle>
      </form>
    </div>
  );
};

export { Adress };
