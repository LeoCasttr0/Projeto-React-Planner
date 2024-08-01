interface AlertDateProps {
  closeAlertDate: () => void;
}

export function AlertDate({ closeAlertDate }: AlertDateProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[300px] bg-red-600 p-4 rounded">
        <p className="text-white">Erro com as datas selecionadas!</p>
        <button
          className="mt-2 bg-white text-red-600 p-2 rounded"
          onClick={closeAlertDate}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
