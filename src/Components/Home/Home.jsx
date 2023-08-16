import './home.css'
import himti from '../../assets/logo/logo himti.png'
import iconMenu from '../../assets/icon/ikon kotak-kotak.png'
import internet from '../../assets/icon/ikon web.png'
import youtube from '../../assets/icon/ikon yotube.png'
import instagram from '../../assets/icon/ikon ig.png'
import email from '../../assets/icon/ikon email.png'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h2>Halo sobat informatika!</h2>
        <h1>Ini Adalah Website Resmi Himti Umt</h1>
        <p>Selamat datang di website resmi Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Tangerang (HIMTI-UMT). Disini anda dapat menemukan informasi mengenai kegiatan kemahasiswaan dilingkungan Universitas Muhammadiyah Tangerang dan event terbaru kami.</p>
        <a href="#"><img src={iconMenu} alt="Menu"/>Get started</a>
      </div>
      <div className="img-home">
      <img src={himti} alt="Logo Himti"/></div>
    <div className="sosials">
        <a href="#"><img src={internet} alt="Icon Internet"/><span>himtiumt.org</span></a>
        <a href="#"><img src={youtube} alt="Icon Youtube"/><span>HITV UMT</span></a>
        <a href="#"><img src={instagram} alt="Icon Instagram"/><span>himtiumt</span></a>
        <a href="#"><img src={email} alt="Icon Email"/><span>himti.umt11@gmail.com</span></a>
    </div>
    </section>
  );
};

export default Home;
