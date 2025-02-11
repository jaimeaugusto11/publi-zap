"use client";
import FormHeader from "@/components/FormHeader/FormHeader";
import ImageInput from "@/components/Forminputs/ImageInput";
import SelectInput from "@/components/Forminputs/selectInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextAreaInput";
import TextInput from "@/components/Forminputs/TextInput";
import { makePostRequest } from "@/lib/apiresquest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCliente() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const markets = [
    { id: 1, title: "Sprouts Farmers Market" },
    { id: 2, title: "Whole Foods Market" },
    { id: 3, title: "Trader Joe's" },
    { id: 4, title: "Walmart Neighborhood Market" },
    { id: 5, title: "Safeway" },
    { id: 6, title: "Kroger" },
    { id: 7, title: "Albertsons" },
    { id: 8, title: "Publix" },
    { id: 9, title: "Aldi" },
    { id: 10, title: "Costco Wholesale" },
  ];

  const sector = [
    { id: 1, title: "Agro Pecuária e Pesca" },
    { id: 2, title: "Alimentação" },
    { id: 3, title: "Audio-Visual, Fotografia e Cinema" },
    { id: 4, title: "Automóvel" },
    { id: 5, title: "Banca e Mercado Financeiro" },
    { id: 6, title: "Bebidas" },
    { id: 7, title: "Comércio a Grosso" },
    { id: 8, title: "Comércio a Retalho" },
    { id: 9, title: "Comunicação e Marketing" },
    { id: 10, title: "Comunicacao Social (Media)" },
    { id: 11, title: "Construção e Obras Públicas" },
    { id: 12, title: "Consultadoria" },
    { id: 13, title: "Cutura e Lazer" },
    { id: 14, title: "Distribuição" },
    { id: 15, title: "Economia" },
    { id: 16, title: "Educação / Formação" },
    { id: 17, title: "Electrodomésticos" },
    { id: 18, title: "Electrónica" },
    { id: 19, title: "Energia" },
    { id: 20, title: "Eventos/Feiras/Seminários" },
    { id: 21, title: "Formação" },
    { id: 22, title: "Graficas/Impressão" },
    { id: 23, title: "Higiene Pessoal/Lar" },
    { id: 24, title: "Higienização Industrial" },
    { id: 25, title: "Hotelaria" },
    { id: 26, title: "Imobiliária" },
    { id: 27, title: "Indústria" },
    { id: 28, title: "Indústria Petrolífera" },
    { id: 29, title: "Informática" },
    { id: 30, title: "Jogos/Casinos" },
    { id: 31, title: "Justiça" },
    { id: 32, title: "Mobiliário" },
    { id: 33, title: "Restauração" },
    { id: 34, title: "Saúde e Bem-estar" },
    { id: 35, title: "Seguros" },
    { id: 36, title: "Tecnologia" },
    { id: 37, title: "Telecomunicações" },
    { id: 38, title: "Transportes" },
    { id: 39, title: "Turismo" },
    { id: 40, title: "Vestuário" },
  ];

  const negocio = [
    { id: 1, title: "Manutenção" },
    { id: 2, title: "Novo" },
    { id: 4, title: "Recuperado" },
  ];
  const tipoCliente = [
    { id: 1, title: "Novo" },
    { id: 2, title: "Recuperado" },
    { id: 4, title: "Super Antigo" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(data:any) {
  
    setLoading(true);
    data.nomeCliente
    data.negocio
    data.sector
    data.telefone
    data.type
    data.imageurl = imageUrl;
    console.log(data);

    makePostRequest(setLoading, "api/client", data, "Cliente", reset);
    setImageUrl("");
  }

  return (
    <div>
      <FormHeader title="Novo Cliente" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200
      rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
      "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Nome do Cliente"
            name="nomeCliente"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="Negócio"
            name="negocio"
            register={register}
            errors={errors}
            className="w-full"
            options={negocio}
            multiple={false}
          />
          <SelectInput
            label="Sector"
            name="sector"
            register={register}
            errors={errors}
            className="w-full"
            options={sector}
            multiple={false}
          />
          <TextInput
            label="Telefone"
            type="number"
            name="telefone"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            label="Tipo de Cliente"
            name="type"
            register={register}
            errors={errors}
            className="w-full"
            options={tipoCliente}
            multiple={false}
          />

          <ImageInput
            label="Cliente Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="ClienteUploader"
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Criar Cliente"
          loadingButtonTitle="Creating Cliente please wait..."
        />
      </form>
    </div>
  );
}
