interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}