const Footer = () => {

  const today = new Date()

  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="bg-dark">
        <div className="container pb-1 pb-lg-5">
          {/* End Row */}
          <div className="border-top border-white-10 my-7" />
          {/* Copyright */}
          <div className="w-md-85 text-lg-center mx-lg-auto">
            <p className="text-white-50 small">
              ©  { today.getFullYear() } Voncay. All rights reserved.
            </p>
          </div>
          {/* End Copyright */}
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
};

export default Footer;
