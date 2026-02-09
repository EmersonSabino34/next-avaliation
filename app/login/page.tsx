"use client"

import { useState } from "react";
import { Header } from "../componetes/Header";

export default function LoginPage(){ 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const[emailError, setEmailError] = useState('hidden');
    const [passwordError, setPasswordError] = useState('hidden');

    const handleValidarLogin = () => {
        if(email === ''){
            setEmailError('block');
            return;
        }
        if(password === ''){
            setPasswordError('block');
            return; 
        }
        setEmailError('hidden');
        setPasswordError('hidden');
        alert('Login realizado com sucesso!');
            
    }
    return (
        <div className="bg-zinc-50 h-screen">
            <Header />
            <div className="h-96 w-96 mx-auto mt-10 rounded-xl 
                 shadow-xl shadow-green-100 p-10 bg-green-100">
                <h1 className="text-3xl m-6 text-center text-slate-400 font-semibold">Login Page</h1>

                <div className="flex flex-col gap-6 mt-16">

                    <input value={email} onChange={ e => setEmail(e.target.value) } 
                        className="p-2 rounded-md text-slate-400 border border-green-300" />
                    <p className={`text-red-400 mb-3 ${emailError}`}>Precisa colocar seu email!</p>
                    
                    <input type="password" value={password} onChange={ e => setPassword(e.target.value) }

                        className="p-2 mt-5 rounded-md text-slate-400 border border-green-300" />
                    <p className={`text-red-400 mb-3 ${passwordError}`}>Precisa colocar sua senha!</p>
                    
                    <button
                    onClick={ handleValidarLogin } 
                    className="bg-green-200 cursor-pointer hover:bg-green-300 hover:text-white 
                    transition-all p-2 rounded-md mt-4 text-slate-500">Login</button>
                </div>
            </div>
        </div>
    );
}
