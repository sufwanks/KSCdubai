import ContactHeader from "../../images/contactImg.jpg";
import "./contact.css";


function Contact() {
  return (
    <>
      {/* Contact Header */}
      <div className="contact">
        <div>
          <div className="img">

            <img src={ContactHeader} alt="" />
          </div>
          <div className="Overlay"></div>

        </div>
        <div className="row">

          <div className="col-md-6">
            <div className="ContactContent">

              {/*  */}
              <form action="">
                <h6>Contact us Now</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Your Number"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="How We Can Help You"
                    required
                  ></textarea>
                </div>

                <button className="btn">Submit Now</button>
              </form>
              {/*  */}
            </div>
          </div>
          {/* <div className="col-md-6">
            <div class="card" >
              <ul class="list-group ">
                <li class="list-group-item"><strong>OUR ADDRESS</strong> <br />
                  Opp. Madinat Zayed,Abu Dhabi,United Arab Emirates</li>
                <li class="list-group-item"><strong>EMAIL ADDRESS</strong> <br />
                  info@kscabudhabi.com</li>
                <li class="list-group-item"><strong>PHONE NUMBER</strong> <br />
                  +971 2 631 4455</li>
              </ul>
              
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Contact;