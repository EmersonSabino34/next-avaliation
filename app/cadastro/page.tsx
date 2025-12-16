"use client"


import { Header } from "../componetes/Header";

export function Cadastro() {
  return (
    
   <div className="bg-zinc-50 h-screen ">
     
    <Header />
    <div className="h-96 w-96 mx-auto mt-10 rounded-xl 
          shadow-xl shadow-green-100 p-10 bg-green-100">
          <h1 className="text-3xl m-6 text-center text-slate-400 font-semibold">Cadastro</h1>

          <div className="flex flex-col gap-6 mt-16">
              <input 
               className="p-2 rounded-md text-slate-400 border border-green-300" 
               placeholder="Nome Completo" />

              <input 
               className="p-2 rounded-md text-slate-400 border border-green-300" 
               placeholder="Email" />

               <input 
               className="p-2 rounded-md text-slate-400 border border-green-300" 
               placeholder="Confirmar email" />

              <input 
               type="password"
               className="p-2 rounded-md text-slate-400 border border-green-300" 
               placeholder="Senha" />
               
               <button className="bg-green-200 cursor-pointer hover:bg-green-300 hover:text-white 
                    transition-all p-2 rounded-md mt-4 text-slate-500">Enter</button>

                <button className="bg-green-200 cursor-pointer hover:bg-green-300 hover:text-white 
                    transition-all p-2 rounded-md mt-4 text-slate-500">Cadastrar</button>
   </div>
   </div>
  </div>
  );
}

export default Cadastro;
