import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div>
      <div className="text-gray-700 flex flex-col gap-4 p-10">
        <h2 className="text-2xl">
          <span>1. Terms of Service</span>
        </h2>
        <h3>
          <span>1. Terms</span>
        </h3>
        <p>
          <span>
            By accessing the website at{" "}
            <a className="text-blue-600" href="https://thesurvivalamerica.com/">
              The Last Blackout
            </a>{" "}
            you are agreeing to be bound by these terms of service, all
            applicable laws and regulations, and agree that you are responsible
            for compliance with any applicable local laws. If you do not agree
            with any of these terms, you are prohibited from using or accessing
            this site. The materials contained in this website are protected by
            applicable copyright and trademark law.
          </span>
        </p>
        <h3>
          <span>2. Use License</span>
        </h3>
        <ul className="list-decimal ml-8">
          <li>
            <span>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on The Last Blackout&apos;s
              website for personal, non-commercial transitory viewing only. This
              is the grant of a license, not a transfer of title, and under this
              license you may not:
            </span>
          </li>
          <li>
            <span>modify or copy the materials;</span>
          </li>
          <li>
            <span>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </span>
          </li>
          <li>
            <span>
              attempt to decompile or reverse engineer any software contained on
              The Last Blackout website;
            </span>
          </li>
          <li>
            <span>
              remove any copyright or other proprietary notations from the
              materials; or
            </span>
          </li>
          <li>
            <span>
              transfer the materials to another person or &apos;mirror&apos; the
              materials on any other server.
            </span>
          </li>
          <li>
            <span>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by The Last Blackout at
              any time. Upon terminating your viewing of these materials or upon
              the termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </span>
          </li>
        </ul>
        <h3>
          <span>3. Disclaimer</span>
        </h3>
        <ul className="list-decimal ml-8">
          <li>
            <span>
              The materials on The Last Blackout&apos;s website are provided on
              an &apos;as is&apos; basis. The Last Blackout makes no warranties,
              expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of
              rights.
            </span>
          </li>
          <li>
            <span>
              Further, The Last Blackout does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </span>
          </li>
        </ul>
        <h3>
          <span>4. Limitations</span>
        </h3>
        <p>
          <span>
            In no event shall The Last Blackout or its suppliers be liable for
            any damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption) arising out of the use
            or inability to use the materials on The Last Blackout&apos;s
            website, even if The Last Blackout or a The Last Blackout authorized
            representative has been notified orally or in writing of the
            possibility of such damage. Because some jurisdictions do not allow
            limitations on implied warranties, or limitations of liability for
            consequential or incidental damages, these limitations may not apply
            to you.
          </span>
        </p>
        <h3>
          <span>5. Accuracy of materials</span>
        </h3>
        <p>
          <span>
            The materials appearing on The Last Blackout&apos;s website could
            include technical, typographical, or photographic errors. The Last
            Blackout does not warrant that any of the materials on its website
            are accurate, complete or current. The Last Blackout may make
            changes to the materials contained on its website at any time
            without notice. However The Last Blackout does not make any
            commitment to update the materials.
          </span>
        </p>
        <h3>
          <span>6. Links</span>
        </h3>
        <p>
          <span>
            The Last Blackout has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by The
            Last Blackout of the site. Use of any such linked website is at the
            user&apos;s own risk.
          </span>
        </p>
        <h3>
          <span>7. Modifications</span>
        </h3>
        <p>
          <span>
            The Last Blackout may revise these terms of service for its website
            at any time without notice. By using this website you are agreeing
            to be bound by the then current version of these terms of service.
          </span>
        </p>
        <h3>
          <span>8. Governing Law</span>
        </h3>
        <p>
          <span>
            These terms and conditions are governed by and construed in
            accordance with the laws of The Last Blackout and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
