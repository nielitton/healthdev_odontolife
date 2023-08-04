import { useForm } from "react-hook-form";
import { FormLineStyle, InputStyle } from "../generalDatas/style";
import { useEffect, useState } from "react";
import { ButtonsEditMode } from "../buttonsEditMode";
import { api } from "../../api/api";

const Password = () => {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit } = useForm();

  const [dataApi, setDataApi] = useState({
    name: "",
    password: "",
  })

  const getDoctor = async () => {
    try {
      await api
        .get("/doctor/2918658e-3ba5-4ccc-9f13-6848fd45f314")
        .then((response) => {
          setDataApi({
            name: response.data.name,
            password: response.data.password
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);
  

  const handleFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormLineStyle>
          <div>
            <p className="text-title">Informações pessoais</p>
            <p>Atualize sua senha aqui</p>
          </div>
          <ButtonsEditMode isPassword={true} editMode={editMode} setEditMode={setEditMode}>Salvar senha</ButtonsEditMode>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Usuário / Senha</p>
          <div className="separated-inputs">
            <InputStyle value={dataApi.name} type="text" {...register("username")} />
            <InputStyle value={dataApi.password} type="password" {...register("password")} />
          </div>
        </FormLineStyle>
        { editMode === false ? (
          ""
        ) : (
          <FormLineStyle>
            <p className="title-text password-title">
              Nova senha / Repetir senha
            </p>
            <div className="separated-inputs new-password-inputs">
              <InputStyle
                type="password"
                {...register("newPassword")}
                placeholder="Nova senha"
              />
              <InputStyle
                type="password"
                {...register("confirmPassword")}
                placeholder="Repetir senha"
              />
            </div>
          </FormLineStyle>
        )}
      </form>
    </div>
  );
};

export { Password };
