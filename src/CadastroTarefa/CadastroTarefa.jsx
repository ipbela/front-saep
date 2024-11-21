import Navbar from "../Navbar/Navbar";

function CadastroTarefa() {
    return (
        <>
            <Navbar />

            <div className="flex justify-center mt-[7%]">
                <div className="bg-gray-100 p-4 block gap-2 w-[30%] drop-shadow-lg text-center rounded-lg">
                    <h1 className="p-4">Cadastre uma tarefa aqui: </h1>
                    <input type="text" name="" id="" placeholder="Insira a descrição da tarefa" className="rounded-lg mt-4 mb-4 pl-[15px] py-[10px] w-[90%]" />
                    <input type="text" name="" id="" placeholder="Insira o setor da tarefa" className="rounded-lg mb-4 pl-[15px] py-[10px] w-[90%]" />
                    <select name="" id="" className="rounded-lg mb-4 pl-[15px] py-[10px] w-[90%]">
                        <option value="">Escolha uma prioridade: </option>
                        <option value="Baixa">Baixa</option>
                        <option value="Media">Media</option>
                        <option value="Alta">Alta</option>
                    </select>
                    <select name="" id="" className="rounded-lg mb-4 pl-[15px] py-[10px] w-[90%]">
                        <option value="">Escolha um usuário: </option>
                        <option value="user">user</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default CadastroTarefa;