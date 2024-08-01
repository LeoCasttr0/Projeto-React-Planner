import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker"; //day picker importe
import "react-day-picker/dist/style.css"; //css padrao
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined;
  closeGuestInput: () => void;
  openGuestInput: () => void;
  setDestination: (destination: string) => void; //
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestInput,
  openGuestInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  //abrir modal da data
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  //funçoes da data
  function openDatePickerOpen() {
    return setIsDatePickerOpen(true);
  }

  function closeDatePickerOpen() {
    return setIsDatePickerOpen(false);
  }

  //mostrar a data
  //se a data foi selecionada , vou mostrar
  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de ' LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d' de ' LLL"))
      : null;

  return (
    /**Div dos inputs iniciais */
    /* tamanho do h1,cor do texto, padding horizontal , borda arredondada, display flex, itens centralizados, mostrando a sombra do forms, gap : espaçamento entre os itens */
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      {/* div do input 1 */}
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        {/*background do texto, tamanho, cor do placholder, outline-none: tira a borda padrao do input*/}
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai ?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      {/**div input 2 */}

      <button
        onClick={openDatePickerOpen}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left w-[240px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        {/*background do texto, tamanho, cor do placholder, outline-none: tira a borda padrao do input*/}
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {/*modal campo de data */}
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          {/**estrutura do modal */}
          <div className=" rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            {/**div do modal */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a Data</h2>
                <button onClick={closeDatePickerOpen} type="button">
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2"></div>
            </div>

            {/*day picker */}
            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      {/**separamento */}
      <div className="w-px h-6 bg-zinc-800"></div>
      {/**se essa função for ativada, vai aparecer um botao para alterar a data e o local, se nao, mostrará o botao de continuar  */}
      {isGuestsInputOpen ? (
        <Button onClick={closeGuestInput} variant="primary">
          Alterar Local/Data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary">
          Continuar
          <ArrowRight className="size-5  text-line-950" />
        </Button>
      )}
    </div>
  );
}
