"use client";

export function RouteBackgroundLogo() {
  return (
    <img
      src="/TNN_LOGO.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-1/2 z-0 w-[min(72vw,620px)] -translate-x-1/2 -translate-y-1/2 select-none object-contain"
      style={{ opacity: 0.1 }}
    />
  );
}
