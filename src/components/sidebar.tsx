"use client";
import { Airplay, AppWindow, ChartColumnBig, LayoutGrid, MonitorCheck, PackageSearch, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/baseLogo.png"

import React from "react";
//import { usePathname } from "next/navigation";

export default function Sidebar() {

  console.log("Sidebar renderizou!");

  const sidebarLinks = [
    {
      name: "Analytics",
      links: [
        { title: "Dashboard", icon: LayoutGrid , href: "/dashboard"},
        { title: "Performance", icon: ChartColumnBig , href: ""},
      ],
    },
    {
      name: "Content",
      links: [
        { title: "Clientes", icon: Users,  href: "/dashboard/clientes" },
        { title: "Campanhas", icon: AppWindow, href: ""},
      ],
    },
    {
      name: "Gestão de Conteúdos",
      links: [
        { title: "Plataformas", icon: Airplay , href: ""},
        { title: "Produtos", icon: PackageSearch , href: ""},
        { title: "Programa", icon: MonitorCheck , href: ""},
      ],
    },
  ];

  return (
    <aside  className="flex flex-col bg-white  space-y-6 w-64 h-screen shadow-md px-5 py-8 overflow-y-auto border-r dark:bg-slate-900 dark:border-gray-700 fixed left-0 top-0 ">
      <Link href="#">
        <Image
          className="w-60"
          src={logo}
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6">
          {sidebarLinks.map((item, i) => (
            <div key={i} className="space-y-3">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                {item.name}
              </label>
              {item.links.map((link, linkIndex) => {
                const Icon = link.icon;
                return (
                  <Link passHref
                    key={linkIndex}  // A chave deve estar no Link para garantir que cada um tenha uma identificação única
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href={link.href}
                  >
                    <Icon className="w-5 h-5" />  {/* Renderizando o ícone */}
                    <span className="mx-2 text-sm font-medium">{link.title}</span>  {/* Renderizando o título */}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </aside >
  );
}
