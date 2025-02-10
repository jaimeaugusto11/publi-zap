
import PageHeader from "@/components/PageHeader";
import TableAction from "@/components/TableAction";


import React from "react";

export default function page() {
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

      <h2>Table</h2>
     </div>
    </div>
  );
}
