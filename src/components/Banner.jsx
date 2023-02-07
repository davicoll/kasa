import "../style/banner.css";

const Banner = ({ page, title, tall }) => {
  return (
    <div>
      <div className="banner-cont">
        {tall ? (
          <div className="banner-grey tall"></div>
        ) : (
          <div className="banner-grey"></div>
        )}
        {tall ? (
          <img
            src={page}
            alt="paysage de motagne"
            className="banner-img tall"
          />
        ) : (
          <img src={page} alt="paysage de motagne" className="banner-img " />
        )}
        {title ? (
          <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        ) : null}
      </div>
    </div>
  );
};

export default Banner;
