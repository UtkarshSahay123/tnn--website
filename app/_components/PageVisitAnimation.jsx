"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function PageVisitAnimation() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const isAboutPage = pathname === "/about-us";

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 1450);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  if (isAboutPage) {
    return (
      <div className="page-visit-animation page-visit-about" aria-hidden="true">
        <div className="about-visit-orbit">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="about-visit-core">
          <div className="about-visit-node">NEXUS</div>
          <div className="about-visit-line" />
          <div className="about-visit-caption">BUILDERS ONLINE</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-visit-animation" aria-hidden="true">
      <div className="page-visit-grid" />
      <div className="page-visit-core">
        <div className="page-visit-ring" />
        <div className="page-visit-logo">TNN</div>
        <div className="page-visit-bar">
          <span />
        </div>
      </div>
    </div>
  );
}

export default PageVisitAnimation;
