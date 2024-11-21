import React from "react";
import Navbar from "../Navbar/Navbar";

function Inicial() {

    return (
        <>
            <Navbar />

            <div className="flex gap-[10%] justify-center mt-16">
                <div className="bg-gray-100 p-6">
                    <h1 className="bg-blue-600 p-4 text-center text-white text-lg font-semibold">A FAZER</h1>
                    <div className="mt-4">
                        <p>Descrição: </p>
                        <p>Setor: </p>
                        <p>Prioridade: </p>
                        <p>Usuário: </p>
                        <p>Data de Cadastro: </p>
                    </div>
                </div>

                <div className="bg-gray-100 p-6">
                    <h1 className="bg-blue-600 p-4 text-center text-white text-lg font-semibold">FAZENDO</h1>
                    <div className="mt-4">
                        <p>Descrição: </p>
                        <p>Setor: </p>
                        <p>Prioridade: </p>
                        <p>Usuário: </p>
                        <p>Data de Cadastro: </p>
                    </div>
                </div>

                <div className="bg-gray-100 p-6">
                    <h1 className="bg-blue-600 p-4 text-center text-white text-lg font-semibold">PRONTO</h1>
                    <div className="mt-4">
                        <p>Descrição: </p>
                        <p>Setor: </p>
                        <p>Prioridade: </p>
                        <p>Usuário: </p>
                        <p>Data de Cadastro: </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Inicial;