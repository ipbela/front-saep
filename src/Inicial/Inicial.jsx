import React from "react";
import Navbar from "../Navbar/Navbar";

function Inicial() {

    return (
        <>
            <Navbar />

            <div className="flex gap-[3%] justify-center mt-16">
                <div className="bg-gray-100 w-[30%] rounded-lg">
                    <div className="bg-gradient-to-r from-red-900 via-red-600 to-red-400 lg:p-1 rounded-t-lg"></div>
                    <h1 className="p-4 text-left text-lg font-semibold ml-[1%]">A FAZER</h1>
                    <div className="mt-4 lg:p-4 m-[5%] bg-white drop-shadow-lg">
                        <p>Descrição: </p>
                        <p>Setor: </p>
                        <p>Prioridade: </p>
                        <p>Usuário: </p>
                        <p>Data de Cadastro: </p>
                    </div>
                </div>

                <div className="bg-gray-100 w-[30%] rounded-lg">
                <div className="bg-gradient-to-r from-amber-900 via-amber-600 to-amber-400 lg:p-1 rounded-t-lg"></div>
                    <h1 className="p-4 text-left text-lg font-semibold ml-[1%]">FAZENDO</h1>
                    <div className="mt-4 lg:p-4 m-[5%] bg-white drop-shadow-lg">
                        <p>Descrição: </p>
                        <p>Setor: </p>
                        <p>Prioridade: </p>
                        <p>Usuário: </p>
                        <p>Data de Cadastro: </p>
                    </div>
                </div>

                <div className="bg-gray-100 w-[30%] rounded-lg">
                <div className="bg-gradient-to-r from-green-900 via-green-600 to-green-400 lg:p-1 rounded-t-lg"></div>
                    <h1 className="p-4 text-left text-lg font-semibold ml-[1%]">PRONTO</h1>
                    <div className="mt-4 lg:p-4 m-[5%] bg-white drop-shadow-lg">
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