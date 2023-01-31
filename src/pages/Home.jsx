import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <div className="home-body">
      <Banner page={banner} title />
      <Gallery />
    </div>
  );
};

export default Home;
