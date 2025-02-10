'use client'
import FormHeader from "@/components/FormHeader/FormHeader";
import ImageInput from "@/components/Forminputs/ImageInput";
import SelectInput from "@/components/Forminputs/selectInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextAreaInput";
import TextInput from "@/components/Forminputs/TextInput";
import { makePostRequest } from "@/lib/apiresquest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm} from "react-hook-form"

export default function NewCliente() {
    const {register,reset, handleSubmit, formState:{errors}} = useForm()
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
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function onSubmit(data:any) {

       {/*
      -id => auto()
      -title
      -slug => auto()
      -description
      -image
     */}
        setLoading(true)
      const slug = generateSlug(data.title)
      data.slug = slug
      data.imageurl = imageUrl
      console.log(data)


      makePostRequest(
        setLoading,
        'api/cliente',
        data,
        "Cliente",
        reset 
      );
      setImageUrl("")


    }

  return (
    <div>
      <FormHeader title="Novo Cliente"/>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200
      rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3
      ">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput
          label="Nome do Cliente"
          name="title"
          register={register}
          errors={errors} 
          />
          <SelectInput
          label="Origem"
          name="marketsIds"
          register={register}
          errors={errors}
          className="w-full"
          options={markets}
          multiple={true}
          
          />

          <TextareaInput
           label="Cliente Description"
           name="description"
           register={register}
           errors={errors}
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

