import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <div
        className="modal modal-sheet position-static d-block p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0 flex-column justify-content-center align-items-center">
              <h1 className="fw-bold mb-0 fs-2">Daftar Akun</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Daftar
                </button>

                <hr className="my-4" />

                <h2 className="fs-5 fw-bold mb-3">
                 Daftar dengan akun media sosial anda
                </h2>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                 Daftar dengan Google
                </button>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                  Daftar dengan Facebook
                </button>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                  Daftar dengan GitHub
                </button>
              </form>
              <p>
                Sudah memiliki akun? <Link to="/login">Masuk sekarang</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}