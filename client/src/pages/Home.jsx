import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import "../index.css"

export default function Hero() {
  const imgs = [
    "bg-[url('https://plus.unsplash.com/premium_photo-1683120640224-9e8e52ed7ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRlbnQlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')]",
    "bg-[url('https://plus.unsplash.com/premium_photo-1679547203090-6313a91d4478?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')]",
    "bg-[url('https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]",
  ];
  let index = 0;
  const [active, setActive] = useState(index);
  const [img, setImg] = useState(imgs[index]);
  const [intervalId, setIntervalId] = useState(null);
  const [shouldRunEffect, setShouldRunEffect] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    index = active;
    setShouldRunEffect(false);
    const id = setInterval(() => {
      if (index < imgs.length - 1) index++;
      else index = 0;
      setImg(imgs[index]);
      setActive(index + 1);
      console.log(index);
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [shouldRunEffect]);

  function changeActive(i) {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setShouldRunEffect(true);
    }
    index = i;
    setImg(imgs[index - 1]);
    setActive(index);
  }

  const lines = [1, 2, 3];
  const HtmlLines = lines.map((line) => {
    return (
      <div
        key={line}
        className={active === line ? "text-[#000]" : "text-[#808080]"}
        onClick={() => changeActive(line)}
      >
        <AiOutlineMinus />
      </div>
    );
  });

  return (
    <div
      className={`w-full flex flex-col justify-end ${img} h-screen object-cover object-center bg-cover vignette`}
    >
      <div className="vignette-overlay"></div>

      <div className="flex flex-col justify-center items-center w-full h-full gap-2 text-white">
        <h1 className="text-5xl font-bold ">СОВЕТ МОЛОДЫХ УЧЕНЫХ</h1>
        <p className="text-xl">Уфимского Университета Науки и Технологий</p>
      </div>

      <div className="flex justify-center text-4xl cursor-pointer ">
        {HtmlLines}
      </div>
    </div>
  );
}
