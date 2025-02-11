"use client";
import CustomDataTable from "@/components/CustomDataTable";
import PageHeader from "@/components/PageHeader";
import TableAction from "@/components/TableAction";
import { makeGetRequest } from "@/lib/apiresquest"
import { Cliente } from "@/utils/types";

import React, { useEffect, useState } from "react";

export default function page() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Cliente[]>([]);;

  useEffect(() => {
    makeGetRequest(setLoading, "api/clients", setData);
  }, []);
  
  return (
    <div>
      {/* Header */}
    
       <PageHeader
        heading="Clientes"
        href={"/dashboard/clientes/new"}
        linkTitle="Novo Cliente"
      />
      {/* Table */}

     <TableAction/>
     
    
     
     <div className="py-8">

      <CustomDataTable data_={data}/>
     </div>
    </div>
  );
}
