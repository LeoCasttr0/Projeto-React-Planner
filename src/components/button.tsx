import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-5 py-2 font-medium flex justify-center items-center gap-2",

  variants: {
    variant: {
      primary: "bg-line-300 text-line-950  hover:bg-line-400",
      secondary: "bg-line-500 text-line-950  hover:bg-line-400",
    },

    size: {
      default: "py-2",
      full: "w-full h-11",
    },

    loading: {
      true: "cursor-not-allowed opacity-50",
       false:"",

    }
   
  },

  //se nao for informada qual a variante, ela será por padrão a primary
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  loading?: boolean;
}

{
  /*aceita qualquer propriedade de um button */
}
export function Button({
  children,
  variant,
  size,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size, loading })}>
      {loading && (
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm5 9h-4V7h-2v6h6v-2z"
          ></path>
        </svg>
      )}
      {loading ? "Processing..." : children}
    </button>
  );
}
