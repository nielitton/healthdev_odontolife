import ProfileImageUpload from "../../assets/profileImageUpload.png";
import iconImageUpload from "../../assets/iconImageUpload.svg";

import { useForm } from "react-hook-form";
import { FormLineStyle, InputStyle } from "./style";
import { useDropzone } from "react-dropzone";

import { CustomSelect } from "../select";
import { useState } from "react";
import { ButtonsEditMode } from "../buttonsEditMode";

const GeneralDatas = () => {
  const { getRootProps } = useDropzone();
  const [editMode, setEditMode] = useState(false);


  const options = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "Outro", label: "Outro" },
  ];

  const { register, handleSubmit } = useForm({
    mode: "all",
    criteriaMode: "all",
  });

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
          <ButtonsEditMode editMode={editMode} setEditMode={setEditMode}>Salvar</ButtonsEditMode>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Nome / Sobrenome</p>
          <InputStyle {...register("fullName")} />
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Nascimento / Sexo</p>
          <div className="separated-inputs">
            <InputStyle {...register("born")} />
            <CustomSelect options={options} />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <div className="title-text">
            <p>Sua foto</p>
            <p>Isso será exibido no seu perfil</p>
          </div>
          <div className="profile-image-upload">
            <img src={ProfileImageUpload} alt="" />
            <div {...getRootProps()} className="container-upload-image">
              <img
                src={iconImageUpload}
                className="upload-icon"
                alt="Icone de upload de imagem"
              />
              <p className="text-upload">
                <span className="blue">Clique para fazer upload </span>
                ou arraste e solte SVG, PNG ou JPG (máximo de 800x800)
              </p>
            </div>
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Nascimento / Sexo</p>
          <div className="separated-inputs">
            <InputStyle type="email" {...register("born")} />
            <InputStyle type="number" {...register("phone")} />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">RG / CPF / CNS</p>
          <div className="separated-inputs">
            <InputStyle type="number" {...register("rg")} />
            <InputStyle type="number" {...register("cpf")} />
            <InputStyle type="number" {...register("cns")} />
          </div>
        </FormLineStyle>
      </form>
    </div>
  );
};

export { GeneralDatas };
