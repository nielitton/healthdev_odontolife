import { FormLineStyle, InputStyle } from "../generalDatas/style";
import { Controller, useForm } from "react-hook-form";
import { Switch } from "../switch";
import { CustomSelect } from "../select";
import { ButtonsEditMode } from "../buttonsEditMode";
import { useState } from "react";

const ProfessionalDatas = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      userActive: true,
    }
  });
  const [editMode, setEditMode] = useState(false);

  const optionsState = [{ value: "Ceará", label: "CE" }];

  const optionsAdvice = [{ value: "CRM", label: "CRM" }];

  const opstionsSpecialization = [
    { value: "Cardiologia", label: "Cardiologia" },
    { value: "Dermatologia", label: "Dermatologia" },
    { value: "Gastroenterologia", label: "Gastroenterologia" },
    { value: "Geriatria", label: "Geriatria" },
    { value: "Ginecologia", label: "Ginecologia" },
    { value: "Hematologia", label: "Hematologia" },
    { value: "Infectologia", label: "Infectologia" },
    { value: "Medicina Interna", label: "Medicina Interna" },
    { value: "Nefrologia", label: "Nefrologia" },
    { value: "Neurologia", label: "Neurologia" },
    { value: "Obstetrícia", label: "Obstetrícia" },
    { value: "Oftalmologia", label: "Oftalmologia" },
    { value: "Ortopedia", label: "Ortopedia" },
    { value: "Otorrinolaringologia", label: "Otorrinolaringologia" },
    { value: "Pediatria", label: "Pediatria" },
    { value: "Psiquiatria", label: "Psiquiatria" },
    { value: "Reumatologia", label: "Reumatologia" },
    { value: "Urologia", label: "Urologia" },
  ];

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
          <p className="title">Conselho / Estado conselho</p>
          <div className="separated-inputs">
            <Controller
              name="advice"
              control={control}
              render={({ field }) => (
                <CustomSelect field={field} options={optionsAdvice} />
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <CustomSelect field={field} options={optionsState} />
              )}
            />
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
            <Controller
              name="specialization"
              control={control}
              render={({ field }) => (
                <CustomSelect options={opstionsSpecialization} field={field} />
              )}
            />
            <InputStyle type="number" {...register("rqe")} />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">ID user / Sincronização MEMED</p>
          <div className="separated-inputs">
            <div className="user-sinc">
              <InputStyle type="text" {...register("idUser")} />
              <Controller 
                name="userActive"
                control={control}
                render={({ field }) => <Switch field={field}/>}
              />              
            </div>
          </div>
        </FormLineStyle>
      </form>
    </div>
  );
};

export { ProfessionalDatas };
