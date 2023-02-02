import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner from "../assets/banner.png";

const Home = ({ logements }) => {
  return (
    <div className="home-body">
      <Banner page={banner} title />
      <Gallery logements={logements} />
    </div>
  );
};

export default Home;
