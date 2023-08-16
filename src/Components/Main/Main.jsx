import "./main.css";
import artikel from "../../assets/foto khim-waka.png";
import iconMenu from "../../assets/icon/ikon kotak-kotak.png";
import user1 from "../../assets/foto bang rizik.png";
import user2 from "../../assets/foto bang rajif.png";
import user3 from "../../assets/foto kahim andi.png";
import acara1 from "../../assets/hifest 1.png";
import acara2 from "../../assets/bootcamp 1.png";
import acara3 from "../../assets/musang 1.png";
import himti from "../../assets/logo/logo himti.png";

const Main = () => {
  return (
    <section className="main">
      <div className="artikel" id="artikel">
        <h2>Artikel Tentang Kami</h2>
        <div className="artikel-isi">
          <div className="img-artikel">
            <img src={artikel} alt="Gambar Artikel" />
          </div>
          <div className="content">
            <h2>Halo sobat informatika!</h2>
            <h1>Kami Adalah Bupati Dan Wakil Bupati Terpilih.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque obcaecati alias vero quibusdam hic, dolor omnis libero deleniti placeat eius blanditiis temporibus illo consequuntur culpa similique distinctio perferendis
              sit laboriosam illum dolore? Dolor enim ad necessitatibus eligendi iste beatae dolores, aliquid iure facilis delectus commodi modi officia repudiandae eveniet?
            </p>
            <a href="#">
              <img src={iconMenu} alt="Menu" />
              Lihat selengkapnya
            </a>
          </div>
        </div>
      </div>
      <div className="acara" id="acara">
        <h2 className="flex-text">
          Seputar Sharing Akademik<a href="#">Lihat Semuanya &gt;</a>
        </h2>
        <p className="awalan">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt perspiciatis, nobis, et possimus ut libero consectetur eveniet minus incidunt doloremque quis, eum voluptates praesentium expedita placeat nulla nihil nemo
          quasi eius sapiente excepturi tempora inventore? Autem quam blanditiis cumque, impedit saepe fuga quibusdam veritatis, molestiae tenetur amet libero doloribus.
        </p>
        <div className="row user">
          <div className="card-user">
            <img src={user1} alt="User1" />
            <p>
              Muhammad Riziq Zulfian
              <br />
              (Permateri Hardware)
            </p>
          </div>
          <div className="card-user">
            <img src={user2} alt="User1" />
            <p>
              Rajif Mahendra
              <br />
              (Permateri Web)
            </p>
          </div>
          <div className="card-user">
            <img src={user3} alt="User1" />
            <p>
              Andi Burhanuddin
              <br />
              (Permateri UI/UX)
            </p>
          </div>
        </div>
        <h2 className="flex-text">
          Kegiatan HIMTI UMT<a href="#">Lihat Semuanya &gt;</a>
        </h2>
        <div className="row acara-card">
          <div className="card">
            <img src={acara1} alt="Acara1" />
            <p>HIMTI Festival 2022!</p>
          </div>
          <div className="card">
            <img src={acara2} alt="Acara2" />
            <p>HIMTI Bootcamp</p>
          </div>
          <div className="card">
            <img src={acara3} alt="Acara3" />
            <p>Musyawarah Anggota</p>
          </div>
        </div>
        <h2 className="flex-text">
          Dokumentasi HIMTI UMT<a href="#">Lihat Semuanya &gt;</a>
        </h2>
        <div className="row acara-card">
          <div className="card">
            <img src={acara1} alt="Acara1" />
            <p>HIMTI Festival 2022!</p>
          </div>
          <div className="card">
            <img src={acara2} alt="Acara2" />
            <p>HIMTI Bootcamp</p>
          </div>
          <div className="card">
            <img src={acara3} alt="Acara3" />
            <p>Musyawarah Anggota</p>
          </div>
        </div>
      </div>
      <div className="penutup artikel">
        <h2 className="title">Kata Penutup Dan Terima Kasih</h2>
        <div className="artikel-isi">
          <div className="img-artikel">
            <img src={himti} alt="Gambar Artikel" />
          </div>
          <div className="content">
            <h2>Halo sobat informatika!</h2>
            <h1>Itu Adalah Beberapa Hal Tentang Kami, Terima Kasih</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque obcaecati alias vero quibusdam hic, dolor omnis libero deleniti placeat eius blanditiis temporibus illo consequuntur culpa similique distinctio perferendis
              sit laboriosam illum dolore? Dolor enim ad necessitatibus eligendi iste beatae dolores, aliquid iure facilis delectus commodi modi officia repudiandae eveniet?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
