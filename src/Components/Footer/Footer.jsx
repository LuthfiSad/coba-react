import './footer.css'
import internet from '../../assets/icon/ikon web.png'
import youtube from '../../assets/icon/ikon yotube.png'
import instagram from '../../assets/icon/ikon ig.png'
import email from '../../assets/icon/ikon email.png'

const Footer = () => {
  const handleClick = (event) => {
    event.preventDefault();
    // Lakukan tindakan atau perubahan state Anda di sini
  };
  return (
    <section className="footer">
        <h2>Luthfi Sadli</h2>
      <div className="sosials">
        <a href="" onClick={handleClick}>
          <img src={internet} alt="Icon Internet" />
          <span>himtiumt.org</span>
        </a>
        <a href="" onClick={handleClick}>
          <img src={youtube} alt="Icon Youtube" />
          <span>HITV UMT</span>
        </a>
        <a href="" onClick={handleClick}>
          <img src={instagram} alt="Icon Instagram" />
          <span>himtiumt</span>
        </a>
        <a href="" onClick={handleClick}>
          <img src={email} alt="Icon Email" />
          <span>himti.umt11@gmail.com</span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
