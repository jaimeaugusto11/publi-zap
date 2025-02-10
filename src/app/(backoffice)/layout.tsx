import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";


export default function Layout({ children }:any) {
  
  return (
    <div className="flex">
      {/*  sidebar */}

      <Sidebar/>
      <div className="lg:ml-64 ml-0 dark:bg-slate-900 flex-grow bg-slate-100 min-h-screen">
        {/*  Header */}
        <Navbar/>

        <main className=" bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-10 p-10">
          {children}
          
        </main>
      </div> 
      {/*  main body */}
    </div>
  );
}
