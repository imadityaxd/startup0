
const Logo = () => (
  <a href="/" className="block w-56 mb-10">
    <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 -75)">
          <g transform="translate(0 75)">
            <rect width="512" height="512" rx="128" fill="#3D5AFE" />
            <rect x="149" y="176" width="220" height="220" fill="#fff" />
            <circle cx="259" cy="156" r="40" fill="#fff" />
            <circle cx="369" cy="286" r="40" fill="#2962FF" />
          </g>
          <text fill="white" fontFamily="Nunito-Bold, Nunito" fontSize="512" fontWeight="bold">
            <tspan x="654" y="518">Tailwindow</tspan>
          </text>
        </g>
      </g>
    </svg>
  </a>
);

const SectionTitle = ({ children }) => (
  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">{children}</h2>
);

const LinkList = ({ links }) => (
  <ul className="leading-8">
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href} className="hover:text-blue-400">{link.text}</a>
      </li>
    ))}
  </ul>
);

const SocialLinks = () => {
  const socialIcons = [
    {
      href: '#',
      icon: (
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      ),
    },
    {
      href: '#',
      icon: (
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
      ),
    },
    {
      href: '#',
      icon: (
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.2-2.1-184.1 0-35.9 1.7-67.7 9.9-93.9 36.2-26.2 26.2-34.4 58-36.2 93.9-2.1 37 0 147.2 0 184.1 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.2 2.1 184.1 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37.1 2.1-147.2 0-184.1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex">
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
          aria-label={`Follow us on ${icon.href}`}
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  const companyLinks = [
    { href: '#', text: 'About Us' },
    { href: '#', text: 'Terms & Conditions' },
    { href: '#', text: 'Privacy Policy' },
    { href: '#', text: 'Contact Us' },
  ];

  const blogLinks = [
    { href: '#', text: 'Getting Started With HTML and CSS' },
    { href: '#', text: 'What Is Flex And When to Use It?' },
    { href: '#', text: 'How TailwindCSS Can Help Your Productivity?' },
    { href: '#', text: '5 Tips to Make Responsive Website' },
    { href: '#', text: 'See More' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <Logo />

        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <SectionTitle>Company</SectionTitle>
            <LinkList links={companyLinks} />
          </div>

          <div className="w-full md:w-1/4 mb-6">
            <SectionTitle>Blog</SectionTitle>
            <LinkList links={blogLinks} />
          </div>

          <div className="w-full md:w-1/4 mb-6">
            <SectionTitle>Follow Us</SectionTitle>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-sm">© 2024 Tailwindow. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
