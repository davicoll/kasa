import "../style/banner.css";

const Banner = ({ page, title }) => {
  return (
    <div className="banner-cont">
      <div className="banner-grey"></div>
      <img src={page} alt="paysage de motagne" className="banner-img" />
      {title ? (
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      ) : null}
    </div>
  );
};

export default Banner;
