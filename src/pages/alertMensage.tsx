interface AlertMessageProps {
  closeAlertMessage: () => void;
}

export function AlertMessage({ closeAlertMessage }: AlertMessageProps) {
  return (
    <div role="alert" className="mt-4">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        ERRO
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>
          Você deixou um campo vazio. Por favor, volte e preencha
          para continuar.
        </p>
        <button
          onClick={closeAlertMessage}
          className="text-red-500 underline mt-2"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
