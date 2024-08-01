import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guest";
import { Activities } from "./activities";
import { HeaderDestination } from "./header-destination";

export function TripDetailsPage() {
  const [isCreateActivityModalOPen, setIsCreateActivityModalOPen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOPen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOPen(false);
  }

  return (
    //Div conteudo principal da pagina
    //Classname : maxima largura,space-y : distanciamento entre os componentes da div
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      {/*container principal */}

      {/* cabeçalho*/}
      <HeaderDestination />
      
      <main className="flex gap-16 px-4">
        {/*primeiro container */}
        <div className="flex-1 space-y-6">
          {/*cabeçalho : titulo atvidades e botão*/}
          <div className="flex items-center justify-between">
            <h2 className=" text-3xl font-semibold text-zinc-100">
              ATIVIDADES
            </h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-line-300 text-line-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-line-400"
            >
              Cadastrar atividade
              <Plus className="size-5 text-line-950" />
            </button>
          </div>

          {/*div dos dias */}
          <Activities />
        </div>

        {/*segundo container */}
        <div className="w-80 space-y-6">
          <ImportantLinks />

          {/*separação */}
          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOPen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
