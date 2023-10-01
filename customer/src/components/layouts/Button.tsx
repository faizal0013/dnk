type Props = {
  children: string;
  bg?: boolean;
  color?: string;
  submit?: boolean;
};

const Button = ({ children, color, bg = false, submit = false }: Props): JSX.Element => {
  return (
    <button
      className={`${
        bg
          ? `${color ? color : 'bg-white'}  hover:bg-black hover:text-white`
          : 'border border-white text-white hover:bg-white hover:text-black'
      } px-9 py-3 text-lg`}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
