import apropos from "../assets/apropos.png";
import Banner from "../components/Banner";
import ToggleLage from "../components/ToggleLage";

const Apropos = () => {
  return (
    <div>
      <Banner page={apropos} tall={true} />
      <ToggleLage />
    </div>
  );
};

export default Apropos;
