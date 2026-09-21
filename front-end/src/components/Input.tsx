const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-87.5 rounded-md bg-white p-2.5 text-sm text-[#32343E] outline-none placeholder:text-[#32343E]"
    />
  );
};
export default Input;
