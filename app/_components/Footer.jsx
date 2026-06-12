import Link from "next/link";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" href="/">
          Home
        </Link>
        <Link className="link link-hover" href="/about-us">
          About us
        </Link>
        <Link className="link link-hover" href="/contact-us">
          Contact Us
        </Link>
        <Link className="link link-hover" href="/events">
          Events
        </Link>
        <Link className="link link-hover" href="#top">
          Go back to top
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/company/team-next-nexus-vit-ap/posts/?feedView=all" aria-label="LinkedIn">
            <img
              src="/sample/linkedin.png"
              alt="LinkedIn"
              className="h-8 w-8 object-contain"
            />
          </a>
          <a href="https://www.instagram.com/tnn_vitap/" aria-label="Instagram">
            <img
              src="/sample/instagram.png"
              alt="Instagram"
              className="h-8 w-8 object-contain"
            />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Team Next Nexus .Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
