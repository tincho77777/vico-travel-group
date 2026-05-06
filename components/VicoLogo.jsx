export default function VicoLogo({ className = "h-10 w-10", textClassName = "" }) {
  return (
    <span className={`inline-flex items-center ${textClassName}`}>
      <img
        src="/logo-vico.jpg"
        alt="VICO Travel Group"
        className={`rounded-full object-cover ring-1 ring-brand-900/10 ${className}`}
      />
    </span>
  );
}
