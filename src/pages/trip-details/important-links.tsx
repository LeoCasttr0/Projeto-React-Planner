import { Link2, Plus, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

// Parte da rota
interface Link {
  id: string;
  title: string;
  url: string;
}

export function ImportantLinks() {
  // modal de links importantes
  const [isImportantLinksModalOPen, setIsImportantLinksModalOPenModalOPen] =
    useState(false);
  const { tripId } = useParams();
  // Crie o estado links fora da função createLinks
  const [links, setLinks] = useState<Link[]>([]);

  // função criar novo link
  function openImportantLinksModal() {
    setIsImportantLinksModalOPenModalOPen(true);
  }

  // função fechar modal de novo link
  function closeImportantLinksModal() {
    setIsImportantLinksModalOPenModalOPen(false);
  }

  // Função para buscar os links importantes
  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);

  // função criada para exibir os links importantes que foram submetidos pelo form
  async function createLinks(event: FormEvent<HTMLFormElement>) {
    // para não fazer o redirecionamento padrão
    event.preventDefault();

    // pegando o valor dos inputs pelo name deles
    const data = new FormData(event.currentTarget);
    const title = data.get("title")?.toString();
    const url = data.get("url")?.toString();

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
    });

    // Atualiza os links após criar um novo
    await api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
    closeImportantLinksModal();
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>

      <div className="space-y-5">
        {links.map((link) => {
          return (
            <div
              key={link.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>
                <a
                  href={link.url}
                  className="block text-xs hover:text-zinc-200 text-zinc-400 truncate"
                >
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5" />
            </div>
          );
        })}
      </div>

      <Button onClick={openImportantLinksModal} variant="secondary" size="full">
        Cadastrar novo Link
        <Plus className="size-5" />
      </Button>

      {/* se o importantlinks estiver ativo, ele vai exibir esta div modal */}
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
                Todos os convidados podem visualizar os links importantes
              </p>
            </div>

            {/* formulario de novo link */}
            <form onSubmit={createLinks} className="space-y-3">
              <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Link2 className="text-zinc-400 size-5" />
                {/* input nome do link */}
                <input
                  name="title"
                  placeholder="Título do link"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Link2 className="text-zinc-400 size-5" />
                {/* input url do link */}
                <input
                  type="url"
                  name="url"
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
