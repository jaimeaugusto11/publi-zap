import { Plus, PlusIcon } from "lucide-react";
import React from "react";

export default function SubmitButton({ isLoading=false, buttonTitle, loadingButtonTitle }:any) {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type="submit"
          className="mt-4 text-white bg-slate-900 hover:bg-slate-950 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 inline-flex items-center"
        >
         <PlusIcon className="w-5 h-5 mr-2"/>
            
          {loadingButtonTitle}
        </button>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center px-5 py-3 mt-4 sm:mt-6
           text-sm font-medium text-center
            text-white bg-slate-900 
            rounded-lg focus:ring-4 focus:ring-blue-200
             dark:focus:ring-blue-900 hover:bg-slate-800
             dark:bg-lime-600 dark:hover:bg-lime-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>{buttonTitle}</span>
        </button>
      )}
    </div>
  );
}