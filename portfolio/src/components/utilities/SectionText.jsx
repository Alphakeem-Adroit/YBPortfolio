const SectionText = ({
  smallTitle,
  title,
  description,
  smallTitleColor = "text-blue-500",
  titleColor = "text-white",
  descriptionColor = "text-zinc-400",
  align = "left",
}) => {
  const isCentered = align === "center";

  return (
    <div
      className={`flex w-full flex-col gap-4 sm:gap-5 ${
        isCentered
          ? "items-center text-center"
          : "items-start text-left"
      }`}
    >
      <div className="flex w-full flex-col gap-3">
        {smallTitle && (
          <p
            className={`font-inter text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${smallTitleColor}`}
          >
            {smallTitle}
          </p>
        )}

        <h2
          className={`max-w-3xl font-inter text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${titleColor} ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {title}
        </h2>
      </div>

      {description && (
        <p
          className={`max-w-2xl font-inter text-base leading-relaxed sm:text-lg ${descriptionColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionText;