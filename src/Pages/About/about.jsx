import AboutHeader from "../../images/aboutImg.jpg";
import AboutCustom from "../../images/kscOfficeImg.jpg";
import "./about.css";



function About() {
    return (
        <>
            {/* About Header */}
            <div className="about">
                <div>
                    <div className="img">
                        <img src={AboutHeader} alt="" />
                    </div>
                    <div className="Overlay"></div>
                </div>
            </div>

            {/* About Main Custom Section */}
            <div className="about_custom container">
                <div className="content">
                    <h6>
                        <span>A</span>bout Us
                    </h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi!</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutCustom} alt="" />
                    </div>

                    <div className="col-md-6">
                        
                        <p>
                            The Kerala Social Centre is a prominent social cultural forum of expatriates from Kerala in Abu Dhabi. The Centre Established in 1972 and it moved to the current premises in Madinat Zayed in the capital in 1996. One of the five Indian community organizations in the capital registered with the UAE Ministry of Community Development, the KSC caters to around 4,500 people, including around 1,500 members and their family members. <br />
                            <br />
                            As a hub of sports and social cultural activities of Keralites in the capital, the KSC Organize several annual events. Jimmy George Memorial UAE Exchange volleyball tournament, winter sport, Bharath Murali memorial drama festival, youth festival, kathakali (a classical dance) festival, Onam feast, Keralolsavam and summer camp for children are the most prominent among them. Art and cultural programs involving writers, academics and artists from India are conducted almost every week at the Centre. Literary and cultural wings of the Centre regularly Organize debates about sociocultural and literary developments in India and rest of the world. <br />
                            <br />
                            Thousands of expatriate children from the South Indian state of Kerala have learnt their mother tongue at the Kerala Social Centre during the past four decades, with the help of qualified senior Centre members who volunteered as language teachers. Every year, around 500 children attend free Malayalam language classes in association with Malayalam Mission and many of them have even excelled in literary writing. A library at the Kerala Social Centre has around 10,000 books in Malayalam and English. All major newspapers and periodicals are available at the library. The library membership is open to all residents.<br />
                            <br />
                            Every year the Centre publishes a book titled <strong>“Pravasi”</strong>  and this book is rich in creative works.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default About;