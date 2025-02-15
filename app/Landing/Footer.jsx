import React from "react";

export default function Footer() {
  return (
    <div className="footer_section">
      <div className="footer-cont">
        <div className="lfoot">
          <div className="footer_logo">
            <img src="ignitlogo.png" width="338.5" alt="" className="img2" />
          </div>
          <div className="contact_footer">
            <img src="call.png" width="23.5" alt="" />
            <a href="tel:+7057072999" className="contact_para">
              +917057072999 <br></br>(Harshal Bhure - Event Coordinator)
            </a>
          </div>
          <div className="contact_footer">
            <img src="mail.png" width="28.5" alt="" className="image" />
            <a href="ignitiaofficial2023@gmail.com" className="contact_para">
              ignitiaofficial2023@gmail.com
            </a>
          </div>
        </div>
        <div className="mfoot">
          <div className="foot_line"></div>
          <p className="desc_footer">
          Introducing Ignitia, a place where innovation meets collaboration. An extraordinary convergence of three dynamic workshops: Aerodynamics and 
          Rocket-Building, DevOps, and Product Management and to top it all, a 36-hour adrenaline-fueled adventure: the Ignitia Hack, the ultimate test of skill, 
          creativity, and endurance
          Ignitia is a collaboration of three renowned clubs: Team Sammard, ISTE, and E-Cell. Together, they have curated an immersive program that will push the
          boundaries of your capabilities.

          </p>
          <div className="foot_line"></div>
          {/* <h1 className="develop_h1">Designed and developed by:</h1>
          <div className="dev_img_wrap">
            <a
              href="https://www.linkedin.com/in/aryak-singh-73686422b/"
              className="developers"
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQEgRURC6ZQcLA/profile-displayphoto-shrink_400_400/0/1678198489941?e=1684972800&v=beta&t=_hH-jZUdeoL4j0YgQ5W94g3SupMEw4vFMUOSQ33A83c"
                alt="Aryak"
                className="img_dev"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/namish-gupta-08b21a217/"
              className="developers"
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQGJyeZGxeYQaA/profile-displayphoto-shrink_400_400/0/1679407969587?e=1684972800&v=beta&t=Fab5Ax6i12z7SpCD78rbNLMA0hNu_srXY0X_FA5g1ic"
                alt="Namish"
                className="img_dev"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chiranjeev-vishnoi-345b481b0/"
              className="developers"
            >
              <img
                src="https://avatars.githubusercontent.com/u/66114276?s=400&u=adc66f8db25530b281768008cfd45fd11cde7970&v=4"
                alt="Chiru"
                className="img_dev"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-sreekar/"
              className="developers"
            >
              <img
                src="https://avatars.githubusercontent.com/u/91886335?v=4"
                alt="Sai"
                className="img_dev"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pratyush-kongalla-995b73209/"
              className="developers"
            >
              <img
                src="https://avatars.githubusercontent.com/u/44525862?v=4"
                alt="Pratyush"
                className="img_dev"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anjaneya-gupta/"
              className="developers"
            >
              <img
                src="https://avatars.githubusercontent.com/u/92802904?v=4"
                alt="anjy"
                className="img_dev"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/naitik-kapadia/"
              className="developers"
            >
              <img
                src="https://avatars.githubusercontent.com/u/88614335?v=4"
                alt="naitik"
                className="img_dev"
              />
            </a> */}
            {/* <a className="developers">
              <img src="developer.jpg" alt="" className="img_dev" />
            </a> */}
          {/* </div> */}
        </div>
        <div className="rfoot">
          <a href="https://www.facebook.com/ecellvit/" className="foot_img">
            <img src="fb.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/ecell_vit/" className="foot_img">
            <img src="insta.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/ecellvitvellore"
            className="foot_img"
          >
            <img src="linkedin.svg" alt="" />
          </a>
          <a href="https://twitter.com/ecell_vit" className="foot_img">
            <img src="twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
