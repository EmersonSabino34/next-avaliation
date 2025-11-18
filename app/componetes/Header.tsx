"use client"

import Link from "next/link";
export function Header() {
  return (
    <header className="bg-blue-400 py-10 flex justify-center gap-2 text-white p-3 w-screen">
        <Link className="bg-sky-400 px-3 p-2 rounded-md" href="/">Home</Link>
        <Link className="bg-amber-400 px-3 p-2 rounded-md" href="/login">Login</Link>
        <Link className="bg-violet-500 px-3 p-2 rounded-md" href="/cadastro">Cadastrado</Link>
        <Link className="bg-red-300 px-3 p-2 rounded-md" href="/pedido">Pedido</Link>
    </header>
  );
}