import { NextPage } from "next";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import BoxDiscipline from "../components/BoxDiscipline/BoxDiscipline";
import { DashboardContainer } from "../components/DashboardContainer/DashboardContainer";

const Dashboard: NextPage = () => {
  return (
    <>
      <div className="flex bg-grey-cool h-16 shadow-2xl">
        <div className="p-2 shadow-2xl hover:cursor-pointer">
          <AiOutlineMenu className="text-bone text-5xl flex-1" />
        </div>

        <h1 className="flex items-center mx-auto text-bone">Olá, Emiliano</h1>
        <a href="profile">
          <div className="p-2 shadow-2xl hover:cursor-pointer">
            <AiOutlineUser className="text-bone text-5xl flex-1" />
          </div>
        </a>
      </div>
      <BoxDiscipline />
      <DashboardContainer />
    </>
  );
};

export default Dashboard;
