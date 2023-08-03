import { useForm } from "react-hook-form";
import { Button, FormLineStyle, InputStyle } from "../generalDatas/style";

const Password = () => {
    const { register, handleSugmit } = useForm()

  return (
    <div>
      <form>
        <FormLineStyle>
          <div>
            <p className="text-title">Informações pessoais</p>
            <p>Atualize sua foto e dados pessoais aqui</p>
          </div>
          <Button className="password-button">Mudar senha</Button>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Usuário / Senha</p>
          <div className="separated-inputs">
            <InputStyle type="text"  {...register("username")} />
            <InputStyle type="password" {...register('password')} />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title-text password-title">Nova senha / Repetir senha</p>
          <div className="separated-inputs new-password-inputs">
            <InputStyle type="password"  {...register("newPassword")} placeholder="Nova senha"/>
            <InputStyle type="password" {...register('confirmPassword')} placeholder="Repetir senha"/>
          </div>
        </FormLineStyle>
      </form>
    </div>
  );
};

export { Password };
