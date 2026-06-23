type ButtonType = {
  title: string;
  variant?: "default" | "outline" | "default-users" | "outline-users";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full cursor-pointer rounded-md border border-[#C92A0E] bg-[#C92A0E] py-1.5 text-xs font-bold text-white";
    } else if (variant === "outline") {
      return "w-full cursor-pointer rounded-md border border-[#c92a0e] bg-white py-1.5 text-xs font-bold text-[#c92a0e]";
    } else if (variant === "default-users") {
      return "h-[35px] max-w-[130px] min-w-[100px] cursor-pointer rounded-sm bg-[#F2DAAC] font-bold border border-[#F2DAAC]";
    } else if (variant === "outline-users") {
      return "cursor-pointer h-[35px] max-w-[130px] min-w-[100px] rounded-sm bg-transparent border-[#F2DAAC] border font-bold text-[#F2DAAC] border-[#F2DAAC] ";
    }
  };
  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
