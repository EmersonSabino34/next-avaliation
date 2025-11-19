"use client";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PedidoPage() {
    const [closeModal, setCloseModal] = useState('hidden');
    
    const handleOpenModal = () => {
        setCloseModal('');
    }

    return (

      
<div className="h-screen flex flex-col justify-center items-center bg-gray-100">
  <h1 className="text-2xl font-bold mb-6">Página de Pedido</h1>

  <div className={`w-72 p-6 bg-white shadow-md rounded-lg text-center ${closeModal}`}>
    <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />

    <label className="block text-left font-medium mb-2">
      Nome do Produto:
    </label>

    <input
      type="text"
      className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      placeholder="Digite o nome"
    />
  </div>

      <button onClick={handleOpenModal} className="p-2 bg-red-500 cursor-pointer hover:text-white transition-all mt-4 text-slate-500 rounded-md">Fazer Pedido</button>
    </div>
  );
}