import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardContext } from "../../../contexts/contextDashboard";
import { Ul } from "./styles";
import { RiLogoutCircleRLine } from "react-icons/ri";

const UlNav: any = ({ burger }: any) => {

  const {user } = useContext(DashboardContext);

  const navigate = useNavigate();

  return (
    <Ul burger={burger}>
      <li>
        <Link to={"/profile"}>Profile</Link>
      </li>
      <li>
        <Link to={"/forum"}>Forum</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>Colections</Link>
      </li>
      <li>
        <Link to={"/profile"}>Achievements</Link>
      </li>
      <li className="imgPerfil"><img src={user?.avatar} alt="" /></li>
      <li>
        <button
          onClick={() => {
            localStorage.removeItem("Token");
            navigate("/login");
          }}
        >
          <RiLogoutCircleRLine/>
        </button>
      </li>
    </Ul>
  );
};

export default UlNav;
