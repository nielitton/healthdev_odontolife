import ProfileImageUpload from "../../assets/profileimageupload.png";
import iconImageUpload from "../../assets/iconimageupload.svg";

import { useForm, Controller } from "react-hook-form";
import { FormLineStyle, InputStyle } from "./style";
import { useDropzone } from "react-dropzone";

import { CustomSelect } from "../select";
import { useEffect, useState } from "react";
import { ButtonsEditMode } from "../buttonsEditMode";
import { api } from "../../api/api";

const GeneralDatas = () => {
  const { getRootProps } = useDropzone();
  const [editMode, setEditMode] = useState(false);

  const [dataApi, setDataApi] = useState({
    name: "",
    email: "",
    phone: "(85) 99999-9999",
    rg: "",
    cpf: "",
    cns: "",
    born: "",
    genre: "",
  });

  const getDoctor = async () => {
    try {
      await api
        .get("/doctor/2918658e-3ba5-4ccc-9f13-6848fd45f314")
        .then((response) => {
          response.data;
          setDataApi({
            name: response.data.name,
            email: response.data.email,
            rg: response.data.rg,
            cpf: response.data.cpf,
            cns: response.data.cns,
            born: response.data.born,
            genre: response.data.genre,
          })
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  const options = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "Outro", label: "Outro" },
  ];

  const { register, handleSubmit, control } = useForm({
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
          <ButtonsEditMode editMode={editMode} setEditMode={setEditMode}>
            Salvar
          </ButtonsEditMode>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Nome / Sobrenome</p>
          { editMode ? <InputStyle onChange={(e) => setDataApi({
            name: e.target.value
          })} {...register("fullName")}/> : <InputStyle value={dataApi.name} {...register("fullName")} />}
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Nascimento / Sexo</p>
          <div className="separated-inputs">
            <InputStyle value={dataApi.born} {...register("born")} />
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <CustomSelect value={dataApi.genre} options={options} field={field} />
              )}
            />
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
          <p className="title">Email / Telefone</p>
          <div className="separated-inputs">
            <InputStyle value={dataApi.email}  type="email" {...register("born")} />
            <InputStyle  value={dataApi.phone} type="number" {...register("phone")} />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">RG / CPF / CNS</p>
          <div className="separated-inputs">
            <InputStyle value={dataApi.rg} type="number" {...register("rg")} />
            <InputStyle value={dataApi.cpf} type="number" {...register("cpf")} />
            <InputStyle value={dataApi.cns} type="number" {...register("cns")} />
          </div>
        </FormLineStyle>
      </form>
    </div>
  );
};

export { GeneralDatas };
