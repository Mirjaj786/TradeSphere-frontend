import { Link } from "react-router-dom"; // use react-router-dom

export default function NotFound() {
  return (
    <div className="container py-5 mb-5">
      <div className="row align-items-center">
        {/* Text section */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <p className="fs-1 fw-bold mt-5">404</p>
          <h1 className="mt-3 mb-3 fs-2">Kiaan couldn’t find that page</h1>
          <p className="fs-5">
            We couldn’t find the page you were looking for. <br />
            Visit{" "}
            <Link to="/" className="text-decoration-none text-primary">
              Zerodha’s home page
            </Link>
          </p>
        </div>

        {/* Image section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="Media/Images/kiaan404.jpg"
            alt="Not Found Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
