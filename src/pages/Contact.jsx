import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

function Contact() {
  return (
    <>
    <Header />
    <div className="container py-5">
      <h1 className="text-center mb-4">Hubungi Saya</h1>

      <form className="col-md-6 mx-auto">

        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Pesan</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>

        <button className="btn btn-primary w-100">
          Kirim Pesan
        </button>

      </form>
    </div>
    <Footer />
    </>
  )
}

export default Contact;