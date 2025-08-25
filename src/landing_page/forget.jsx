import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="container p-5 mb-5 center">
      <div className="row ">
        <div className="col p-5 mt-5">
          
          <h1 className="mt-5 mb-3 fs-2">Forget Password Functionalaty will be soon!</h1>
          <p className="mt-3 fs-4">
            Please check back later. <br />
            Visit <Link to="/" style={{textDecoration:"none"}}>Zerodha’s home page</Link>
          </p>
        </div>
        <div className="col">
          <img src="Media/Images/kiaan404.jpg" alt="Not Found Image" />
        </div>
      </div>
    </div>
  );
}
