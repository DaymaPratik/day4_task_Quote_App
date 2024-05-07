import "./Footer.css";
function Footer() {
  return (
    <div className="footer-box">
      <h2 className="footer-heading">Footer Heading</h2>
      <p className="footer-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minimat, 
         molestiae aliqua m voluptatibus repellendus m voluptatibus repellendus 
      </p>
      <ul className="footer-list">
        <li>About</li>
        <li>Careers</li>
        <li>History</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>
      <div className="footer-icons-box">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/022/257/063/small/icon-media-social-facebook-free-vector.jpg"
          alt=""
          width="30px"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
          alt=""
          width="30px"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
          alt=""
          width="30px"
        />
        <img
          src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
          alt=""
          width="30px"
        />
        <img
          src="https://banner2.cleanpng.com/20180422/wdq/kisspng-computer-icons-basketball-sport-basketball-icon-5adc69b9b491e5.0470435915243944257396.jpg"
          alt=""
          width="30px"
        />
      </div>
    </div>
  );
}
export default Footer;
