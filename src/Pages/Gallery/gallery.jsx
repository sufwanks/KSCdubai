import ContactHeader from "../../images/galleryImg.jpg";
import "./gallery.css";
import Img1 from "../../images/1.jpg";
import Img2 from "../../images/2.jpg";
import Img3 from "../../images/3.jpg";
import Img4 from "../../images/4.jpg";
import Img5 from "../../images/5.jpg";
import Img6 from "../../images/6.jpg";
import Img7 from "../../images/7.jpg";

function Gallery () {
  return (
    <>
      {/* Gallery Header */}
      <div className="contact gallery">
        <div>
          <div className="img">
            <img src={ContactHeader} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
      </div>

      {/* Gallery Start */}

      <div className="Customgallery container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
            </div>
          </div>

          {/* Second Row */}
          <div className="col-sm-4">
            <div className="box">
              <img src={Img4} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img5} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img6} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Img7} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Gallery;