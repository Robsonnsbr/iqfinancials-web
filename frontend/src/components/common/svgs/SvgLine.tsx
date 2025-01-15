import React from "react";

const SvgLine = ({ align = "left", className = "" }) => {
  const xPosition = align === "right" ? 100 : 0;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      className={`h-16 w-auto ${className}`}
    >
      <line
        x1="0"
        y1="10"
        x2="100"
        y2="10"
        stroke="var(--color-blue)"
        strokeWidth="4"
      />
      <line
        x1={xPosition}
        y1="10"
        x2={xPosition}
        y2="50"
        stroke="var(--color-blue)"
        strokeWidth="2"
        markerEnd={
          align === "right" ? "url(#red-marker-right)" : "url(#red-marker-left)"
        }
      />
      <defs>
        <marker
          id="red-marker-left"
          markerWidth="4"
          markerHeight="4"
          refX="2"
          refY="0.5"
          orient="auto"
        >
          <rect x="0" y="0" width="2" height="4" fill="var(--color-red)" />
        </marker>
        <marker
          id="red-marker-right"
          markerWidth="4"
          markerHeight="4"
          refX="2"
          refY="3.5"
          orient="auto"
        >
          <rect x="0" y="0" width="2" height="4" fill="var(--color-red)" />
        </marker>
      </defs>
    </svg>
  );
};

export default SvgLine;
