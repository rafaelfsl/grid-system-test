import { COLORS } from "../../constants";

interface VerticalBarProps {
  num: number;
  color?: string;
}

const VerticalBar = ({ num, color }: VerticalBarProps) => {
  const colorStyle = color ? { color } : {};

  return (
    <div id={`bar-num-${num}`} className="col">
      <div className="container d-flex flex-column h-100 justify-content-center align-items-center flex-1" style={{ backgroundColor: COLORS[num % COLORS.length], ...colorStyle }}></div>
    </div>
  );
};

export default VerticalBar;
