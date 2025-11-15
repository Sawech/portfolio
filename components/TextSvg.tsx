// components/TextSvg.tsx
interface TextSvgProps {
  text: string;
  className?: string;
  color?: string;
  fontSize?: number;
}

export const TextSvg = ({
  text,
  className = "",
  color = "#ffffff",
  fontSize = 32,
}: TextSvgProps) => {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="50%"
        fontFamily="Arial, sans-serif"
        fontSize={fontSize}
        fontWeight="bold"
        fill={color}
        textAnchor="start"
        dominantBaseline="middle"
      >
        {text}
      </text>
    </svg>
  );
};
