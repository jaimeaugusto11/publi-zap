// import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    //fetch('http://localhost:3000/api/categories')
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    });
    
    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is NOT Enough");
      } else {
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makeGetRequest(setLoading, endpoint, setData) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    console.log(baseUrl)
    
    // Realiza a requisição GET para o endpoint especificado
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Quando a requisição for bem-sucedida, convertemos os dados para JSON
      const data = await response.json();
      console.log(data)
      setData(data); // Atualiza o estado com os dados recebidos
      setLoading(false); // Define o carregamento como false
    } else {
      // Se a resposta não for OK, exibe uma mensagem de erro
      setLoading(false);
      toast.error("Something went wrong while fetching data");
    }
  } catch (error) {
    // Caso haja erro na requisição (ex: erro de rede), trata o erro
    setLoading(false);
    console.error("Fetch error:", error);
    toast.error("Error fetching data");
  }
}
