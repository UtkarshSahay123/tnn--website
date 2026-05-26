// app/_components/SocialLinks.jsx
import Link from "next/link";
import {
  FaEnvelope,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

export default function SocialLinks({
  linkedin,
  github,
  instagram,
  twitter,
  email,
}) {
  const links = [
    { href: linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
    { href: github, label: "Github", icon: <FaGithubSquare /> },
    { href: instagram, label: "Instagram", icon: <FaInstagramSquare /> },
    { href: twitter, label: "Twitter", icon: <FaTwitterSquare /> },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        {links.map(
          (link, idx) =>
            link.href && (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center gap-2"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            )
        )}
        {email && (
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>{email}</span>
          </div>
        )}
      </div>
    </div>
  );
}
