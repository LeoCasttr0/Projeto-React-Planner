import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

//espera recebe algumas funções de um determinado arquivo
interface InviteGuestModalPropos {
  closeGuestModal: () => void;
  //array de strings
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailfromInvites: (email: string) => void;
  isMensageErrorOpen: boolean;
  closeMensageError: () => void;
  isFormEmpty: boolean;
  closeMensageErrorForm: () => void;
}

export function InviteGuestModal({
  closeGuestModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailfromInvites,
  isMensageErrorOpen,
  closeMensageError,
  isFormEmpty,
  closeMensageErrorForm,
}: InviteGuestModalPropos) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      {/**estrutura do modal */}
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/**modal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
            <button onClick={closeGuestModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400 ">
            os convidados irão receber e-mails para confimar a participação na
            viagem.
          </p>

          {/*se ele passar do tamanho dessa div ele quebra a linha */}
          <div className="flex flex-wrap gap-2">
            {/*Map: percorre um array e retorna todos os itens dque estão dentro */}
            {emailsToInvite.map((email) => {
              return (
                <div
                  key={email}
                  className="py-1.5 px-2.5 rounded-nd bg-zinc-800 flex items-center gap-2"
                >
                  <span className="text-zinc-300">{email}</span>
                  <button
                    type="button"
                    onClick={() => removeEmailfromInvites(email)}
                  >
                    <X className="size-4 text-zinc-400" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        {/*formulario de inserir email */}
        {/** onSubmit: função que você deseja disparar quando a informação for submetida*/}
        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o E-mail do Convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button type="submit" variant="primary">
            Convidar
            <Plus className="size-5  text-line-950" />
          </Button>
        </form>

        {isMensageErrorOpen && (
          <div role="alert" className="mt-4">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              ERRO
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>Este e-mail já foi cadastrado.</p>
              <button
                onClick={closeMensageError}
                className="text-red-500 underline mt-2"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {isFormEmpty && (
          <div role="alert" className="mt-4">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              ERRO
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>
                Você não adicionou nenhum Convidado, Não aceitamos respostas
                nulas.
              </p>
              <button
                onClick={closeMensageErrorForm}
                className="text-red-500 underline mt-2"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
