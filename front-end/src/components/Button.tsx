type ButtonType = {
  title: string;
  variant?:
    | "default-orange"
    | "outline-orange"
    | "default-beige"
    | "outline-beige"
    | "delete";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  title,
  variant = "default-orange",
  ...props
}: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default-orange") {
      return "p-2 flex items-center justify-center w-full cursor-pointer rounded-md border border-[#C92A0E] bg-[#C92A0E] text-sm font-bold text-white";
    } else if (variant === "outline-orange") {
      return "p-2 flex items-center justify-center w-full cursor-pointer rounded-md border border-[#c92a0e] bg-white  text-sm font-bold text-[#c92a0e]";
    } else if (variant === "default-beige") {
      return "flex items-center justify-center p-2 text-sm md:text-base cursor-pointer h-[35px] max-w-[130px] min-w-[100px] cursor-pointer rounded-sm bg-[#F2DAAC] font-bold border border-[#F2DAAC]";
    } else if (variant === "outline-beige") {
      return "flex items-center justify-center p-2 text-sm md:text-base cursor-pointer h-[35px] max-w-[130px] min-w-[100px] rounded-sm bg-transparent border-[#F2DAAC] border font-bold text-[#F2DAAC] border-[#F2DAAC] ";
    } else if (variant === "delete") {
      return "flex items-center justify-center px-1 text-xs cursor-pointer rounded-sm border border-[#CB2C17] text-[#CB2C17] font-bold bg-trasnparent uppercase";
    }
  };
  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};
export default Button;
