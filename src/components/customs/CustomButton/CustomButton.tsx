import "./CustomButton.styles.css";
import { ButtonProps } from "../../../interfaces/button";

const CustomButton = ({ ...props }: ButtonProps) => {
  return (
    <>
      <button
        // quiero que el content sea en mayuscula
        className={
          "bg-[#12c185] hover:bg-[#0e8e65] text-white font-bold py-2 px-4 rounded h-[5rem] w-full text-2xl uppercase m-2"
        }
        onClick={props.onClick}
        type={props.type}
      >
        {props.content}
      </button>
    </>
  );
};
export default CustomButton;
