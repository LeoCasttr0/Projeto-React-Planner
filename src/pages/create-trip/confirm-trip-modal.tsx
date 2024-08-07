import { Mail, User, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { AlertMessage } from "../alertMensage";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface ConfirmTripmodalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  SetOwnerName: (name: string) => void;
  SetOwnerEmail: (email: string) => void;
}

export function ConfirmTripmodal({
  closeConfirmTripModal,
  createTrip,
  SetOwnerName,
  SetOwnerEmail,
}: ConfirmTripmodalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertMessageOpen, setIsAlertMessageOpen] = useState(false); // Adiciona o estado do alerta

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await createTrip(event);
    } catch (error) {
      setIsAlertMessageOpen(true); // Mostra o alerta em caso de erro
    } finally {
      setIsLoading(false);
    }
  };

  function closeAlertMessage() {
    setIsAlertMessageOpen(false);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar Criação de Viagem
            </h2>
            <button onClick={closeConfirmTripModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem , Preencha seus dados abaixo :
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => SetOwnerName(event.target.value)}
            />
          </div>

          <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => SetOwnerEmail(event.target.value)}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="full"
            loading={isLoading}
          >
            Confirmar criação da viagem
          </Button>

          {isAlertMessageOpen && (
            <AlertMessage closeAlertMessage={closeAlertMessage} />
          )}
        </form>
      </div>
    </div>
  );
}
