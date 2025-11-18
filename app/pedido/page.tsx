"use client";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PedidoPage() {
    const [closeModal, setCloseModal] = useState('hidden');
    
    const handleOpenModal = () => {
        setCloseModal('');
    }

    return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Página de Pedido</h1>

        <div className={`w-44 p-5 ${closeModal}`}>
            <FaCheckCircle />
            <label className="block mb-2">Nome do Produto:</label>
            <input type="text" className="border p-2 w-full mb-4" />
        </div>

      <button onClick={handleOpenModal} className="p-2 bg-red-500 text-white">Fazer Pedido</button>
    </div>
  );
}