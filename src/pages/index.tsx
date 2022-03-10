import type { NextPage } from "next";
import Image from "next/image";
import { Input } from "../components/Input";
import AnimaIMG from "../../public/anima.svg";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image src={AnimaIMG} height={150} width={150} alt="anima-logo" />
        <Input text="Login" />
        <Input text="Password" />
        <Button buttonText="Iniciar" />
        <p className="text-white mt-3">
          Esqueceu sua senha? <span className="text-bone">Clique aqui</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
