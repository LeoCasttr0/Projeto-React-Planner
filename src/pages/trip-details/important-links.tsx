import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
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

      <Button variant="secondary" size="full">
        Cadastrar novo Link
        <Plus className="size-5" />
      </Button>
    </div>
  );
}
