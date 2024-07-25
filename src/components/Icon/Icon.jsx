import sprite from "/icons.svg";

export const Icon = ({ id, width = 32, height = 32, className }) => (
  <svg className={className} width={width} height={height}>
    <use href={`${sprite}#${id}`} />
  </svg>
);
