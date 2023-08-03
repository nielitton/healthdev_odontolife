import { Button, FormLineStyle, InputStyle } from "../generalDatas/style";
import { useForm } from "react-hook-form";
import { CustomSelect } from "../select";

const Adress = () => {

    const { register, handleSubmit } = useForm()

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
          <p className="title">Nascimento / Sexo</p>
          <div className="separated-inputs">
            <CustomSelect />
            <CustomSelect />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">RG / CPF / CNS</p>
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
