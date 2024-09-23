export function MTOTransparentBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <img
      src="/mto/mto_transparent_background.svg"
      alt="mto_transparent_background.svg"
      className={className}
    />
  );
}

export function MTOLogo() {
  return <img src="/mto/mto-02.svg" alt="mto_transparent_background.svg" />;
}

const landing_dev =
  "file:///D:/GoogleDrive/Uni/mto-community/branding/web/dev-team.jpg";
const landing_net = "https://cdn.mtocommunity.com/landing-net-team.webp";
const landing_iot = "https://cdn.mtocommunity.com/landing-iot-team.webp";
const landing_os = "https://cdn.mtocommunity.com/landing-os-team.webp";
const landing_sec = "https://cdn.mtocommunity.com/landing-security-team.webp";

export { landing_dev, landing_net, landing_iot, landing_os, landing_sec };
