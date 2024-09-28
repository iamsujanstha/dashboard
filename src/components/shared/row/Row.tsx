import React, { ReactNode } from "react";
import "./DynamicGrid.scss";

interface DynamicGridProps {
  children: ReactNode;
  columnCount: number;
  gap?: string;
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ children, columnCount, gap = "16px" }) => {
  const gridTemplateColumns = `repeat(${columnCount}, 1fr)`;

  return (
    <div
      className="dynamic-grid"
      style={{
        gridTemplateColumns,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default DynamicGrid;
