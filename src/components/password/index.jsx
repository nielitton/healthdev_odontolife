import { useForm } from "react-hook-form";
import { FormLineStyle, InputStyle } from "../generalDatas/style";
import { useState } from "react";
import { ButtonsEditMode } from "../buttonsEditMode";

const Password = () => {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit } = useForm();

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
          <ButtonsEditMode isPassword={true} editMode={editMode} setEditMode={setEditMode}>Salvar senha</ButtonsEditMode>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Usuário / Senha</p>
          <div className="separated-inputs">
            <InputStyle type="text" {...register("username")} />
            <InputStyle type="password" {...register("password")} />
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
