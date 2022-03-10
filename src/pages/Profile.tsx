import { NextPage } from "next";
import Image from "next/image";
import profileIMG from "../../public/perfil.png";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import Session from "../components/Session/Session";

const Profile: NextPage = () => {
  return (
    <>
      <div className="w-full px-5 py-5 text-bone text-3xl">
        <AiOutlineClose />
      </div>
      <div className="flex flex-col items-center h-screen">
        <div>
          <Image
            className="rounded-full"
            src={profileIMG}
            width={110}
            height={110}
            alt="Foto de perfil"
          />
        </div>
        <div className="mt-3 mb-10">
          <h1 className="text-bone text-xl">Emiliano da Silveira</h1>
        </div>
        <div className="space-y-6">
          <Session sessionText="Turmas" />
          <Session sessionText="Boletos" />
          <Session sessionText="CAE" />
          <Session sessionText="Rematrícula" />
          <Session sessionText="Alterar dados cadastrais" />
          <Session sessionText="Privacidade" />
        </div>
        <div className="pt-8 text-bone text-4xl">
          <AiOutlineCloseCircle />
        </div>
      </div>
    </>
  );
};

export default Profile;
