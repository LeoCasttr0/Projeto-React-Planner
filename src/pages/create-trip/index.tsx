import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./invite-guest-modal";
import { ConfirmTripmodal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestStep } from "./steps/invite-guest-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CreateTripPage() {
  const navigate = useNavigate();

  //funcionalidade do botao usando JavaScript
  //conceito de estado estado : variavel, que vamos nomear e colocar ela em boleano.

  //navegação
  const [isGuestsModalOpen, setIsGuestModalOpen] = useState(false); //fazer um array, o segundo valor é uma função para atualizar o valor 1
  const [isGuestsInputOpen, setIsGuestInputOpen] = useState(false); //estado abertura do modal

  const [destination, setDestination] = useState(""); // destino
  const [ownerName, SetOwnerName] = useState(""); // nome do criador da viagem
  const [ownerEmail, setOwnerEmail] = useState(""); //email do criador da viagem
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

  const [emailsToInvite, setEmailToInvite] = useState([
    //aqui terá um array para armazenar todos os emails
    "leonardo.castro@gmail.com",
  ]); //estado do envio de E-mail

  const [isMensageErrorOpen, setIsMensageErrorOpen] = useState(false); //variaveis de erro email duplicado

  const [isFormEmpty, setIsFormEmpty] = useState(false); //formulário vazio

  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false); //modal de confirmação da viagem

  //função de abrir modal de confimação
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  //fechar modal de confirmação
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  //função form vazio
  function openMensageErrorForm() {
    setIsFormEmpty(true);
  }

  //fechar error form vazio
  function closeMensageErrorForm() {
    setIsFormEmpty(false);
  }

  //função error
  function openMensageError() {
    setIsMensageErrorOpen(true);
  }

  //fechar função error
  function closeMensageError() {
    setIsMensageErrorOpen(false);
  }

  //função para exibir o input
  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  //função para quando o usuario apertar em editar local e data , os inputs voltarem a estar habilitados
  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  //funcao abrir modal
  function openGuestModal() {
    setIsGuestModalOpen(true);
  }

  //fechar modal
  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }

  //função adicionar o email na tela
  //(event: FormEvent) --> parâmetro de um evento
  //prevent.defult -->
  //<HTMLFormElement> --> especificando que o evento vem de um form
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    //se o usuario nn preencher nada no email,exibi a mensagem de erro
    if (!email) {
      openMensageErrorForm();
      return;
    }

    //validação para nao deixar cadastrar dois emails iguais
    if (emailsToInvite.includes(email)) {
      openMensageError(); // Exibe alerta se o e-mail já existir
      return;
    }

    setEmailToInvite([...emailsToInvite, email]);

    //resetar o formulario assim que se resetar
    event.currentTarget.reset();
  }

  //função remover email da lista
  //vamos receber um parametro nessa função
  //salvando nesse array todos os emails menos oque eu desejo remover
  function removeEmailfromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailToInvite(newEmailList);
  }

  //função de navegação do usuario
  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(destination);
    console.log(ownerName);
    console.log(ownerEmail);
    console.log(eventStartAndEndDates);

    //validações dos campos
    if (!destination) {
      isAlertMessageOpen();
      return;
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
      isAlertMessageOpen();
      return;
    }

    const body = {
      destination: destination,
      starts_at: eventStartAndEndDates?.from,
      ends_at: eventStartAndEndDates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    };
    console.log(body);

    //importando api
    const response = await api.post("/trips", body);

    const { tripId } = response.data;
    navigate(`/trips/${tripId}`);
  }

  return (
    //className : mesma definição de class
    //vai ocupar toda a altura da tela, display flex, align itens center, justify content center
    <div className="h-screen flex items-center justify-center ">
      <div className="max-w-3xl w-full px-4 text-center space-y-10">
        {/**div da imagem : displayflex, flex direction column */}
        <div className="flex flex-col items-center gap-2">
          <img src="/logo.png" alt="planner" />
        </div>

        {/**paragrafo da frase de cima */}
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e Planeje sua próxima viagem !
        </p>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestInput={closeGuestInput}
            openGuestInput={openGuestInput}
            setDestination={setDestination}
            eventStartAndEndDates={eventStartAndEndDates}
            setEventStartAndEndDates={setEventStartAndEndDates}
          />

          {/*if essa funçao estiver na ativa, mostrar aberto, else fechado*/}
          {isGuestsInputOpen && (
            <InviteGuestStep
              openGuestModal={openGuestModal}
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>

        {/**paragrafo de baixo com frase */}
        <p className="text-sm text-zinc-500">
          {" "}
          Ao planejar sua viagem pela Planner você automaticamente concorda{" "}
          <br /> com nossos
          <a className="text-zinc-300 underline" href="#">
            {" "}
            termos de uso{" "}
          </a>{" "}
          e
          <a className="text-zinc-300 underline" href="#">
            {" "}
            politica de privacidade.{" "}
          </a>
        </p>
      </div>

      {/** Codigo do Modal */}
      {/**se esta função de abrir o modal for ativada*/}
      {isGuestsModalOpen && (
        <InviteGuestModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestModal={closeGuestModal}
          removeEmailfromInvites={removeEmailfromInvites}
          isMensageErrorOpen={isMensageErrorOpen}
          closeMensageError={closeMensageError}
          isFormEmpty={isFormEmpty}
          closeMensageErrorForm={closeMensageErrorForm}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripmodal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          SetOwnerName={SetOwnerName}
          SetOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
}
function isAlertMessageOpen() {
  throw new Error("Function not implemented.");
}



