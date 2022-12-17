import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div
        className="container-fluid mx-auto px-4 py-8 mx-auto space-y-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-4">
          <div>
            <div className="text-xl font-semibold">
              DreamTrip
            </div>
            <p className="max-w-xs mt-4 text-gray-500">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <ul className="flex gap-3 mt-8">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:opacity-75">
                  <span className="sr-only">Facebook</span>
                  <FaFacebookSquare className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitterSquare className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
          >
            <div>
              <p className="font-medium text-gray-900">Services</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      HR Consulting
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900">Helpful Links</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Contact
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Live Chat
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900">Legal</p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p className="text-base text-gray-500 text-center">
          &copy; 2022 DreamTrip, Inc. All rights reserved.
        </p>
      </div>
    </footer>

  )
};
export default Footer;
