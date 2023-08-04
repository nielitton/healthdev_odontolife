import { FormLineStyle, InputStyle } from "../generalDatas/style";
import { useForm, Controller } from "react-hook-form";
import { CustomSelect } from "../select";
import { ButtonsEditMode } from "../buttonsEditMode";
import { useState } from "react";

const Adress = () => {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const optionsSelectState = [
    { value: "Ceará", label: "CE" },
  ];

  const optionsSelectCityes = [
    { value: "Fortaleza", label: "Fortaleza - CE" },
    { value: "Sobral", label: "Sobral - CE" },
    { value: "Juazeiro do Norte", label: "Juazeiro do Norte - CE" },
    { value: "Caucaia", label: "Caucaia - CE" },
    { value: "São Paulo", label: "São Paulo - SP" },
    { value: "Rio de Janeiro", label: "Rio de Janeiro - RJ" },
    { value: "Recife", label: "Recife - PE" },
  ];

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormLineStyle>
          <div>
            <p className="text-title">Informações pessoais</p>
            <p>Atualize sua foto e dados pessoais aqui</p>
          </div>
          <ButtonsEditMode editMode={editMode} setEditMode={setEditMode}>
            Salvar
          </ButtonsEditMode>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Nascimento / Sexo</p>
          <div className="separated-inputs">
            <Controller
              name="state"
              control={control}
              render={({ field }) => <CustomSelect options={optionsSelectState} field={field}/>}
            />
            <Controller
              name="cityes"
              control={control}
              render={({ field }) => <CustomSelect options={optionsSelectCityes} field={field}/>}
            />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Logradouro / Número / Bairro</p>
          <div className="separated-inputs">
            <InputStyle type="text" {...register("street")} />
            <InputStyle type="number" {...register("home-number")} />
            <InputStyle type="text" {...register("district")} />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Complemento</p>
          <div className="separated-inputs">
            <InputStyle
              className="just-one"
              type="text"
              {...register("complement")}
            />
          </div>
        </FormLineStyle>
      </form>
    </div>
  );
};

export { Adress };
