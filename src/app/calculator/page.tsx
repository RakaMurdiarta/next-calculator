"use client";

import React, { useState } from "react";
import Button from "../components/Button";
import { evaluate } from "mathjs";

const Page = () => {
  const arr = ["36 ", "+ ", "2 ", "* ", "5 "];
  const [text, setText] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const handeClick = (text: string) => {
    setText((prev) => {
      return [...prev, text + " "];
    });
  };

  const handleClear = () => {
    setText([]);
    setResult("");
  };

  const handleEqual = (label: string) => {
    // (text.join("").replace(/\s+/g, ""));
    const joinText = text.join("").replaceAll(" ", "");

    const result = evaluate(joinText);
    // (result)
    return setResult(result);
  };

  const handleDelete = () => {
    const r = text.slice(0, -1);
    setText(r);
  };
  return (
    <div className="w-[600px] mx-auto border-2 border-lime-950 rounded-lg bg-inherit">
      <div className="p-3 flex flex-col gap-5">
        <div className="flex flex-col justify-center items-end mx-2 px-3 py-10 bg-white shadow-inner rounded-lg text-end h-[200px]">
          <div className="text-3xl font-extrabold">{result}</div>
          <div className="text-xl font-bold">
            {text.map((item: any) => {
              return item;
            })}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex">
            <Button label="<=" handle={handleDelete} />
          </div>
          <div className="flex items-center justify-around">
            <Button label="7" handle={handeClick} />
            <Button label="8" handle={handeClick} />
            <Button label="9" handle={handeClick} />
            <Button label="*" handle={handeClick} />
          </div>
          <div className="flex items-center justify-around">
            <Button label="4" handle={handeClick} />
            <Button label="5" handle={handeClick} />
            <Button label="6" handle={handeClick} />
            <Button label="-" handle={handeClick} />
          </div>
          <div className="flex items-center justify-around">
            <Button label="1" handle={handeClick} />
            <Button label="2" handle={handeClick} />
            <Button label="3" handle={handeClick} />
            <Button color="green" label="+" handle={handeClick} />
          </div>
          <div className="flex items-center justify-around">
            <Button label="/" handle={handeClick} />
            <Button label="0" handle={handeClick} />
            <Button label="." handle={handeClick} />
            <Button color="green" label="=" handle={handleEqual} />
          </div>
          <div className="flex">
            <Button label="CLEAR" handle={handleClear} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
