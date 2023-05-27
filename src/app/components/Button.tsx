import React from "react";

interface IProps {
  label: string;
  handle?: (text: string) => void | undefined;
  color?: string;
}

const Button = ({ label,color,handle }: IProps) => {
  return (
    <div onClick={()=>{handle?.(label)}} style={{backgroundColor : color}} className="px-3 cursor-pointer py-5 rounded-md w-full text-center text-white bg-slate-800 border m-2 text-xl font-extrabold">
      <div>{label}</div>
    </div>
  );
};

export default Button;
