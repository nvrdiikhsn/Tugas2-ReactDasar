import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

function Team() {
  return (
    <>
    <Header />
    <div className="container py-5">
      <div className="container marketing">
        <div className="row">

          <div className="col-lg-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="rounded-circle mb-3"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Novardi</h2>
            <p>Frontend Developer</p>
            <p>
              <button className="btn btn-secondary">Tentang Saya</button>
            </p>
          </div>

          <div className="col-lg-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              className="rounded-circle mb-3"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Mutia</h2>
            <p>UI/UX Designer</p>
            <p>
              <button className="btn btn-secondary">Tentang Saya</button>
            </p>
          </div>

          <div className="col-lg-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              className="rounded-circle mb-3"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Budi</h2>
            <p>Backend Developer</p>
            <p>
              <button className="btn btn-secondary">Tentang Saya</button>
            </p>
          </div>

        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Team;