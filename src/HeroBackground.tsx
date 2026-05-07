import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Slow ambient animation - ~12 seconds loop
  const progress = frame / (12 * 30);

  // Large floating orbs
  const orb1X = interpolate(progress, [0, 1], [width * 0.2, width * 0.6]);
  const orb1Y = interpolate(progress, [0, 1], [height * 0.3, height * 0.7]);
  const orb1Opacity = interpolate(Math.sin(progress * Math.PI * 2), [-1, 1], [0.08, 0.15]);
  const orb1Scale = interpolate(Math.sin(progress * Math.PI * 2), [-1, 1], [0.9, 1.1]);

  const orb2X = interpolate(progress, [0, 1], [width * 0.8, width * 0.3]);
  const orb2Y = interpolate(progress, [0, 1], [height * 0.7, height * 0.2]);
  const orb2Opacity = interpolate(Math.sin(progress * Math.PI * 2 + 1), [-1, 1], [0.06, 0.12]);

  const orb3X = interpolate(progress, [0, 1], [width * 0.5, width * 0.7]);
  const orb3Y = interpolate(progress, [0, 1], [height * 0.1, height * 0.5]);
  const orb3Opacity = interpolate(Math.sin(progress * Math.PI * 2 + 2), [-1, 1], [0.04, 0.1]);

  // Floating particles
  const particles = Array.from({ length: 40 }, (_, i) => {
    const baseX = ((i * 137.5 + 0.1) % 1) * width;
    const baseY = ((i * 79.3 + 0.2) % 1) * height;
    const speed = 0.3 + (i % 5) * 0.15;
    const drift = Math.sin(progress * speed * Math.PI * 2 + i) * 30;
    const driftY = Math.cos(progress * speed * 0.7 * Math.PI * 2 + i * 0.5) * 20;
    const size = 1 + (i % 3) * 1.5;
    const opacity = 0.1 + (i % 4) * 0.05;
    return { x: baseX + drift, y: baseY + driftY, size, opacity, delay: i * 0.08 };
  });

  // Grid lines
  const gridLines = Array.from({ length: 12 }, (_, i) => {
    const offset = Math.sin(progress * 0.5 + i * 0.5) * 5;
    return { y: (i / 12) * height, offset };
  });

  const gridLinesV = Array.from({ length: 16 }, (_, i) => {
    const offset = Math.sin(progress * 0.5 + i * 0.5) * 5;
    return { x: (i / 16) * width, offset };
  });

  // Pulsing rings
  const rings = Array.from({ length: 4 }, (_, i) => {
    const t = ((progress + i * 0.25) % 1);
    const radius = t * Math.max(width, height) * 0.6;
    const opacity = (1 - t) * 0.06;
    const centerX = width * 0.5 + Math.sin(i * 1.5 + progress * 0.3) * 100;
    const centerY = height * 0.5 + Math.cos(i * 1.5 + progress * 0.3) * 80;
    return { radius, opacity, centerX, centerY, key: i };
  });

  // Hexagon shapes
  const hexagons = Array.from({ length: 5 }, (_, i) => {
    const angle = (i / 5) * Math.PI * 2 + progress * 0.3;
    const dist = 150 + i * 60;
    const x = width / 2 + Math.cos(angle) * dist;
    const y = height / 2 + Math.sin(angle) * dist;
    const size = 20 + i * 15;
    const opacity = 0.03 + (i % 2) * 0.02;
    const rotation = progress * (i % 2 === 0 ? 30 : -20);
    return { x, y, size, opacity, rotation, key: i };
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#09090e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial gradient base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Pulsing rings */}
      {rings.map((ring) => (
        <svg
          key={ring.key}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <circle
            cx={ring.centerX}
            cy={ring.centerY}
            r={ring.radius}
            fill="none"
            stroke="rgba(124,58,237,0.15)"
            strokeWidth={1}
            opacity={ring.opacity}
          />
        </svg>
      ))}

      {/* Hexagons */}
      {hexagons.map((hex) => (
        <svg
          key={hex.key}
          style={{
            position: "absolute",
            top: hex.y - hex.size,
            left: hex.x - hex.size,
            width: hex.size * 2,
            height: hex.size * 2,
            opacity: hex.opacity,
          }}
        >
          <polygon
            points={Array.from({ length: 6 }, (_, j) => {
              const a = ((j / 6) * Math.PI * 2) + (hex.rotation * Math.PI / 180);
              return `${hex.size + Math.cos(a) * hex.size},${hex.size + Math.sin(a) * hex.size}`;
            }).join(" ")}
            fill="none"
            stroke="rgba(124,58,237,0.4)"
            strokeWidth={1}
          />
        </svg>
      ))}

      {/* Grid lines horizontal */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
        }}
      >
        {gridLines.map((line, i) => (
          <line
            key={i}
            x1={0}
            y1={line.y + line.offset}
            x2={width}
            y2={line.y + line.offset}
            stroke="rgba(124,58,237,0.8)"
            strokeWidth={0.5}
          />
        ))}
        {gridLinesV.map((line, i) => (
          <line
            key={i}
            x1={line.x + line.offset}
            y1={0}
            x2={line.x + line.offset}
            y2={height}
            stroke="rgba(124,58,237,0.8)"
            strokeWidth={0.5}
          />
        ))}
      </svg>

      {/* Large orbs */}
      <div
        style={{
          position: "absolute",
          top: orb1Y - 200,
          left: orb1X - 200,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)",
          opacity: orb1Opacity,
          transform: `scale(${orb1Scale})`,
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: orb2Y - 180,
          left: orb2X - 180,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.35) 0%, transparent 70%)",
          opacity: orb2Opacity,
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: orb3Y - 150,
          left: orb3X - 150,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)",
          opacity: orb3Opacity,
          filter: "blur(35px)",
        }}
      />

      {/* Floating particles */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill={
              i % 3 === 0
                ? "rgba(124,58,237,0.7)"
                : i % 3 === 1
                ? "rgba(6,182,212,0.7)"
                : "rgba(167,139,250,0.6)"
            }
            opacity={p.opacity}
          />
        ))}
      </svg>

      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: Math.min(width, height) * 0.5,
          height: Math.min(width, height) * 0.5,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(9,9,14,0.6) 100%)",
        }}
      />
    </div>
  );
};

export default HeroBackground;
