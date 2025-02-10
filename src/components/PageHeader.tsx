import React from "react";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Route } from "next";

export default function PageHeader({heading, linkTitle, href}:{linkTitle:string, heading:string; href: Route}) {
  return (
    <div className="flex  justify-between py-4">
      <Heading title={heading} />
      <Link
        href={href}
        className="
           space-x-3
          text-white bg-lime-600 hover:bg-lime-600/90 focus:right-4
          focus:outline-none
          focus:ring-lime-6bg-lime-600/50 font-medium rounded-lg
          text-base px-5 py-3 text-center
           inline-flex items-center dark:focus:ring-lime-6bg-lime-600/55 me-2 mb-2
        
        "
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
