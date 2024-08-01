import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestStepProps {
  openGuestModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function InviteGuestStep({
  openGuestModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestModal}
        className="flex items center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />

        {/* if para verificar se alguem já esta convidado, se sim, ele mostrará quantas pessoas, se não, mostará uma pergunta */}
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg">
            {" "}
            Quem estará na viagem ?{" "}
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800"></div>

      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar Viagem
        <ArrowRight className="size-5  text-line-950" />
      </Button>
    </div>
  );
}
