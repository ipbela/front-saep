import Navbar from "../Navbar/Navbar";

function CadastroUsuario() {
    return (
        <>
            <Navbar />

            <div className="flex justify-center mt-[10%]">
                <div className="bg-gray-100 p-4 block gap-2 w-[30%] drop-shadow-lg text-center rounded-lg">
                    <h1 className="p-4">Cadastre um usuário aqui: </h1>
                    <input type="text" name="" id="" placeholder="Insira o nome do usuário" className="rounded-lg mt-4 mb-4 pl-[15px] py-[10px] w-[90%]" />
                    <input type="email" name="" id="" placeholder="Insira o email do usuário" className="rounded-lg mb-4 pl-[15px] py-[10px] w-[90%]" />
                </div>
            </div>
        </>
    )
}

export default CadastroUsuario;