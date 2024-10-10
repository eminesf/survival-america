const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#101212] text-white flex flex-col items-center h-48">
        <div className="h-[50%] mt-5">
          <ul className="flex justify-center gap-3 ">
            <a href="/terms" target="_blank">
              <li>Terms of use</li>
            </a>
            <li>|</li>
            <a href="/support" target="_blank">
              <li>Support</li>
            </a>
            <li>|</li>
            <a href="/policy" target="_blank">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div className="h-auto">
          <p>Toll Free: 1-844-202-7042</p>
        </div>
      </div>
      <div className="bg-black text-white text-center text-sm py-1">
        <p>Copyright {year} – Operation Blackout® All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
