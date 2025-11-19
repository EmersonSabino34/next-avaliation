"use client"


import { Header } from "../componetes/Header";

export function Cadastro() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />

      <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Cadastro
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Nome completo"
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;