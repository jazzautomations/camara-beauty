interface LogoProps {
  variant?: "symbol" | "wordmark" | "full";
  color?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "full", color = "dark", className = "" }: LogoProps) {
  const textColor = color === "light" ? "#FAFAFA" : "#0D0D0D";
  const subColor = color === "light" ? "#BABABA" : "#666666";

  const Symbol = () => (
    <svg viewBox="0 0 80 80" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="40" cy="40" r="34" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
      <text
        x="40" y="38"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="30"
        fontWeight="600"
        fill={textColor}
      >
        C
      </text>
      <text
        x="40" y="54"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="9"
        fontWeight="500"
        fill={textColor}
        letterSpacing="1.5"
      >
        BEAUTY
      </text>
    </svg>
  );

  const Wordmark = () => (
    <div className="flex flex-col leading-none">
      <span
        className="serif font-bold uppercase"
        style={{ fontSize: "18px", letterSpacing: "0.15em", color: textColor }}
      >
        CAMARABEAUTY
      </span>
      <span
        className="sans"
        style={{
          fontSize: "9px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: subColor,
          marginTop: "3px",
          textAlign: "center",
        }}
      >
        — BEAUTY SALON —
      </span>
    </div>
  );

  if (variant === "symbol") return <div className={className}><Symbol /></div>;
  if (variant === "wordmark") return <div className={className}><Wordmark /></div>;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Symbol />
      <Wordmark />
    </div>
  );
}
