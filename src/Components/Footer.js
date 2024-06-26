import React from "react";

function Footer(props) {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className={`mb-3 me-2 mb-md-0 text-${
              props.mode === `light` ? `dark` : `light`
            } text-decoration-none lh-1`}
          >
            <svg className="bi" width={30} height={24}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span
            className={`mb-3 mb-md-0 text-${
              props.mode === `light` ? `dark` : `light`
            }`}
          >
            © 2024, OralCam
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
