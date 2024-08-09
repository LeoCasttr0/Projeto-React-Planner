import { Link2, Plus, X } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";

export function ImportantLinks() {
  //modal de links importantes
  const [isImportantLinksModalOPen, setIsImportantLinksModalOPenModalOPen] =
    useState(false);

  //função criar novo link
  function openImportantLinksModal() {
    setIsImportantLinksModalOPenModalOPen(true);
  }

  //fuunção fechar modal de novo link
  function closeImportantLinksModal() {
    setIsImportantLinksModalOPenModalOPen(false);
  }
  
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do Airbnb
            </span>
            <a
              href="#"
              className="block text-xs hover:text-zinc-200 text-zinc-400 truncate"
            >
              https://www.airbnb.com.br/
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>

        <div>
          {" "}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="block font-medium text-zinc-100">
                Reserva do Airbnb
              </span>
              <a
                href="#"
                className="block text-xs hover:text-zinc-200 text-zinc-400 truncate"
              >
                https://www.airbnb.com.br/
              </a>
            </div>
            <Link2 className="text-zinc-400 size-5" />
          </div>
        </div>
      </div>

      <Button onClick={openImportantLinksModal} variant="secondary" size="full">
        Cadastrar novo Link
        <Plus className="size-5" />
      </Button>

      {isImportantLinksModalOPen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar link</h2>
                <button onClick={closeImportantLinksModal} type="button">
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

              <p className="text-sm text-zinc-400">
                Todos os convidados podem vizualizar os links importantes
              </p>
            </div>

            <form className="space-y-3">
              <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Link2 className="text-zinc-400 size-5" />
                <input
                  name="name"
                  placeholder="Título do link"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Link2 className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="URL"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <Button type="submit" variant="primary" size="full">
                Salvar link
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
