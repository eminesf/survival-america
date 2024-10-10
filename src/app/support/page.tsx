import Footer from "../components/Footer";

const Support = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex flex-col h- items-center p-20 gap-6">
        <h2 className="text-blue-700 text-3xl">Contact Info</h2>
        <h1 className="font-bold text-xl">Help & Support</h1>
        <p>
          <strong>Toll Free:</strong> 833-246-6485
          <br /> <strong>Email:</strong> support@getyourseedvault.com
        </p>
        <h1 className="font-bold text-xl">Support Hours</h1>
        <div>
          <ul>
            <li>Monday 8AM - 8PM EST</li>
            <li>Tuesday 8AM - 8PM EST</li>
            <li>Wednesday 8AM - 8PM EST</li>
            <li>Thursday 8AM - 8PM EST</li>
            <li>Friday 8AM - 8PM EST</li>
            <li>Saturday 8AM - 8PM EST</li>
            <li>Sunday 8AM - 8PM EST</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl">Mailing Address</h1>
        </div>
        <p>8 The Green, Ste B Dover, Delaware 19901</p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Support;
