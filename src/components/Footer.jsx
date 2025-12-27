const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 fixed bottom-0 w-full">
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M12 0C5.37 0 0 5.373 0 12c0 6.628 5.37 12 12 12s12-5.372 12-12C24 5.373 18.63 0 12 0z" />
        </svg>
        <p>
          Copyright © {new Date().getFullYear()} – All rights reserved
        </p>
      </aside>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.773 1.77-1.728V1.727C24 .774 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 7.433c-1.13 0-2.045-.916-2.045-2.045 0-1.13.915-2.045 2.045-2.045s2.045.915 2.045 2.045c0 1.129-.915 2.045-2.045 2.045zM20.452 20.452h-3.53v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666h-3.53V9h3.39v1.561h.047c.472-.9 1.624-1.852 3.34-1.852 3.57 0 4.23 2.35 4.23 5.404v6.339z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.62-5.476 5.92.43.37.823 1.096.823 2.21v3.285c0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
