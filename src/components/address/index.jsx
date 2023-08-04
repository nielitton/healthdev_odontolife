import { FormLineStyle, InputStyle } from "../generalDatas/style";
import { useForm, Controller } from "react-hook-form";
import { CustomSelect } from "../select";
import { ButtonsEditMode } from "../buttonsEditMode";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

const Adress = () => {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const [dataApi, setDataApi] = useState({
    state: "",
    city: "",
    street: "",
    number: "34",
    district: "",
    complement: "",
  });

  const getDoctor = async () => {
    try {
      await api
        .get("/doctor/2918658e-3ba5-4ccc-9f13-6848fd45f314")
        .then((response) => {
          response.data;
          setDataApi({
            state: response.data.state,
            city: response.data.city,
            street: response.data.street,
            number: "34",
            district: response.data.district,
            complement: response.data.complement,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  const optionsSelectState = [{ value: "Ceará", label: "CE" }];

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
            <p>Atualize seu endereço aqui</p>
          </div>
          <ButtonsEditMode editMode={editMode} setEditMode={setEditMode}>
            Salvar
          </ButtonsEditMode>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">UF / Municipio de residência</p>
          <div className="separated-inputs">
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  value={dataApi.state}
                  options={optionsSelectState}
                  field={field}
                />
              )}
            />
            <Controller
              name="cityes"
              control={control}
              render={({ field }) => (
                <CustomSelect options={optionsSelectCityes} field={field} />
              )}
            />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Logradouro / Número / Bairro</p>
          <div className="separated-inputs">
            <InputStyle value={dataApi.street} type="text" {...register("street")} />
            <InputStyle value={dataApi.number} type="number" {...register("home-number")} />
            <InputStyle value={dataApi.district} type="text" {...register("district")} />
          </div>
        </FormLineStyle>
        <FormLineStyle>
          <p className="title">Complemento</p>
          <div className="separated-inputs">
            <InputStyle
              value={dataApi.complement}
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
