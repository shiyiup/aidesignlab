import { useCurrentFrame, useVideoConfig, interpolate, AbsoluteFill } from "remotion";

const Flower: React.FC<{
  x: number; y: number; size: number; color: string; delay: number; index: number;
}> = ({ x, y, size, color, delay, index }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = (frame + delay * 30) / durationInFrames;
  const floatY = interpolate(Math.sin(progress * Math.PI * 2), [-1, 1], [-8, 8]);
  const floatX = interpolate(Math.cos(progress * Math.PI * 1.5 + index), [-1, 1], [-5, 5]);
  const rotate = interpolate(Math.sin(progress * Math.PI * 2 + index), [-1, 1], [-15, 15]);
  const scale = 0.8 + Math.sin(progress * Math.PI * 2 + index * 0.5) * 0.2;
  const opacity = 0.6 + Math.sin(progress * Math.PI * 2 + index) * 0.3;

  return (
    <g transform={`translate(${x + floatX}, ${y + floatY}) rotate(${rotate}) scale(${scale})`} opacity={Math.max(0.2, opacity)}>
      {Array.from({ length: 5 }, (_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const px = Math.cos(angle) * size * 0.5;
        const py = Math.sin(angle) * size * 0.5;
        return (
          <ellipse key={i} cx={px} cy={py} rx={size * 0.35} ry={size * 0.2}
            fill={color} transform={`rotate(${(angle * 180) / Math.PI})`} opacity={0.85} />
        );
      })}
      <circle cx={0} cy={0} r={size * 0.2} fill="#ffe066" opacity={0.9} />
      <circle cx={0} cy={0} r={size * 0.1} fill="#fff" opacity={0.4} />
    </g>
  );
};

const Butterfly: React.FC<{
  startX: number; startY: number; endX: number; endY: number;
  size: number; color1: string; color2: string; delay: number; index: number;
}> = ({ startX, startY, endX, endY, size, color1, color2, delay, index }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = ((frame + delay * 30) % durationInFrames) / durationInFrames;
  const x = interpolate(progress, [0, 1], [startX, endX]);
  const y = interpolate(progress, [0, 1], [startY, endY]) +
    Math.sin(progress * Math.PI * 4 + index) * 30;
  const wingFlap = Math.abs(Math.sin(frame * 0.3 + index)) * 0.5 + 0.5;
  const opacity = 0.5 + Math.sin(progress * Math.PI * 2 + index) * 0.3;

  return (
    <g transform={`translate(${x}, ${y})`} opacity={Math.max(0.3, opacity)}>
      <ellipse cx={-size * 0.6} cy={0} rx={size * 0.7} ry={size * 0.5}
        fill={color1} opacity={0.8} transform={`scale(${wingFlap}, 1)`} />
      <ellipse cx={size * 0.6} cy={0} rx={size * 0.7} ry={size * 0.5}
        fill={color2} opacity={0.8} transform={`scale(${wingFlap}, 1)`} />
      <ellipse cx={0} cy={0} rx={size * 0.1} ry={size * 0.3} fill="#333" />
      <line x1={0} y1={-size * 0.3} x2={-size * 0.15} y2={-size * 0.5} stroke="#333" strokeWidth={1} />
      <line x1={0} y1={-size * 0.3} x2={size * 0.15} y2={-size * 0.5} stroke="#333" strokeWidth={1} />
    </g>
  );
};

const Fairy: React.FC<{
  x: number; y: number; size: number; delay: number; index: number;
}> = ({ x, y, size, delay, index }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = (frame + delay * 30) / durationInFrames;
  const floatY = interpolate(Math.sin(progress * Math.PI * 1.5 + index), [-1, 1], [-20, 20]);
  const floatX = interpolate(Math.cos(progress * Math.PI * 1.2 + index * 0.7), [-1, 1], [-15, 15]);
  const glow = 0.5 + Math.sin(frame * 0.1 + index) * 0.3;

  return (
    <g transform={`translate(${x + floatX}, ${y + floatY})`}>
      <circle cx={0} cy={0} r={size * 2} fill="rgba(255,200,100,0.15)" opacity={glow} />
      <circle cx={0} cy={0} r={size} fill="rgba(255,220,150,0.25)" opacity={glow} />
      <circle cx={0} cy={0} r={size * 0.4} fill="#ffe88a" opacity={0.9} />
      <ellipse cx={-size * 0.5} cy={-size * 0.3} rx={size * 0.6} ry={size * 0.4}
        fill="rgba(255,200,255,0.6)" transform="rotate(-30)" opacity={0.7} />
      <ellipse cx={size * 0.5} cy={-size * 0.3} rx={size * 0.6} ry={size * 0.4}
        fill="rgba(200,220,255,0.6)" transform="rotate(30)" opacity={0.7} />
      {[0, 120, 240].map((angle, i) => {
        const px = Math.cos(angle * Math.PI / 180) * size * 1.5;
        const py = Math.sin(angle * Math.PI / 180) * size * 1.5;
        return <circle key={i} cx={px} cy={py} r={1.5} fill="#fff" opacity={0.3 + (i * 0.2)} />;
      })}
    </g>
  );
};

const Firefly: React.FC<{
  startX: number; startY: number; endX: number; endY: number;
  delay: number; index: number;
}> = ({ startX, startY, endX, endY, delay, index }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = ((frame + delay * 30) % durationInFrames) / durationInFrames;
  const x = interpolate(progress, [0, 1], [startX, endX]) +
    Math.sin(progress * Math.PI * 3 + index) * 20;
  const y = interpolate(progress, [0, 1], [startY, endY]) +
    Math.cos(progress * Math.PI * 2.5 + index) * 15;
  const glow = 0.4 + Math.sin(frame * 0.15 + index * 2) * 0.4;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx={0} cy={0} r={15} fill="rgba(255,240,150,0.3)" opacity={glow} />
      <circle cx={0} cy={0} r={8} fill="rgba(255,240,150,0.5)" opacity={glow} />
      <circle cx={0} cy={0} r={3} fill="#fffbe6" opacity={0.9} />
    </g>
  );
};

const Vine: React.FC<{
  x: number; y: number; length: number; angle: number; index: number;
}> = ({ x, y, length, angle, index }) => {
  const frame = useCurrentFrame();
  const sway = Math.sin(frame * 0.05 + index) * 5;

  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle + sway})`}>
      <path d={`M 0 0 Q ${length * 0.3} ${-20} ${length} ${-10}`}
        stroke="rgba(50,120,50,0.4)" strokeWidth={2} fill="none" />
      {[0.3, 0.6, 0.9].map((t, i) => {
        const lx = length * t;
        const ly = -10 + (i % 2 === 0 ? -8 : 8);
        return <ellipse key={i} cx={lx} cy={ly} rx={8} ry={4}
          fill="rgba(80,160,60,0.3)" transform={`rotate(${i % 2 === 0 ? -30 : 30})`} />;
      })}
    </g>
  );
};

export const HeroBg: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const progress = frame / durationInFrames;

  const flowers = [
    { x: width * 0.1, y: height * 0.2, size: 18, color: "#ff6b9d", delay: 0, index: 0 },
    { x: width * 0.25, y: height * 0.35, size: 14, color: "#c084fc", delay: 2, index: 1 },
    { x: width * 0.4, y: height * 0.15, size: 20, color: "#ffb3d0", delay: 4, index: 2 },
    { x: width * 0.55, y: height * 0.3, size: 16, color: "#ff6b9d", delay: 1, index: 3 },
    { x: width * 0.7, y: height * 0.2, size: 22, color: "#e879f9", delay: 3, index: 4 },
    { x: width * 0.85, y: height * 0.35, size: 15, color: "#f9a8d4", delay: 5, index: 5 },
    { x: width * 0.15, y: height * 0.5, size: 12, color: "#c084fc", delay: 6, index: 6 },
    { x: width * 0.35, y: height * 0.6, size: 18, color: "#ff6b9d", delay: 8, index: 7 },
    { x: width * 0.6, y: height * 0.55, size: 14, color: "#d8b4fe", delay: 7, index: 8 },
    { x: width * 0.8, y: height * 0.5, size: 20, color: "#ff6b9d", delay: 9, index: 9 },
    { x: width * 0.2, y: height * 0.75, size: 16, color: "#e879f9", delay: 10, index: 10 },
    { x: width * 0.5, y: height * 0.7, size: 22, color: "#ffb3d0", delay: 11, index: 11 },
    { x: width * 0.75, y: height * 0.75, size: 15, color: "#c084fc", delay: 12, index: 12 },
    { x: width * 0.9, y: height * 0.65, size: 18, color: "#f9a8d4", delay: 13, index: 13 },
  ];

  const butterflies = [
    { startX: -50, startY: height * 0.2, endX: width + 50, endY: height * 0.3, size: 12, color1: "rgba(255,150,200,0.7)", color2: "rgba(200,150,255,0.7)", delay: 0, index: 0 },
    { startX: width + 50, startY: height * 0.4, endX: -50, endY: height * 0.5, size: 10, color1: "rgba(255,200,100,0.7)", color2: "rgba(255,150,100,0.7)", delay: 5, index: 1 },
    { startX: -50, startY: height * 0.6, endX: width + 50, endY: height * 0.5, size: 14, color1: "rgba(200,180,255,0.7)", color2: "rgba(255,180,220,0.7)", delay: 10, index: 2 },
    { startX: width * 0.3, startY: -30, endX: width * 0.7, endY: height + 30, size: 11, color1: "rgba(255,220,150,0.7)", color2: "rgba(255,180,200,0.7)", delay: 15, index: 3 },
    { startX: width + 50, startY: height * 0.8, endX: -50, endY: height * 0.9, size: 9, color1: "rgba(220,200,255,0.7)", color2: "rgba(200,220,255,0.7)", delay: 20, index: 4 },
  ];

  const fairies = [
    { x: width * 0.2, y: height * 0.25, size: 8, delay: 0, index: 0 },
    { x: width * 0.7, y: height * 0.35, size: 6, delay: 8, index: 1 },
    { x: width * 0.4, y: height * 0.6, size: 7, delay: 15, index: 2 },
    { x: width * 0.85, y: height * 0.7, size: 5, delay: 22, index: 3 },
  ];

  const fireflies = [
    { startX: width * 0.1, startY: height * 0.3, endX: width * 0.4, endY: height * 0.5, delay: 0, index: 0 },
    { startX: width * 0.6, startY: height * 0.2, endX: width * 0.9, endY: height * 0.4, delay: 3, index: 1 },
    { startX: width * 0.3, startY: height * 0.7, endX: width * 0.6, endY: height * 0.9, delay: 6, index: 2 },
    { startX: width * 0.8, startY: height * 0.6, endX: width * 0.5, endY: height * 0.8, delay: 9, index: 3 },
    { startX: width * 0.15, startY: height * 0.5, endX: width * 0.35, endY: height * 0.7, delay: 12, index: 4 },
    { startX: width * 0.7, startY: height * 0.8, endX: width * 0.9, endY: height * 0.6, delay: 15, index: 5 },
    { startX: width * 0.45, startY: height * 0.4, endX: width * 0.6, endY: height * 0.3, delay: 18, index: 6 },
    { startX: width * 0.85, startY: height * 0.4, endX: width * 0.65, endY: height * 0.6, delay: 21, index: 7 },
  ];

  const vines = [
    { x: width * 0.05, y: height * 0.1, length: 120, angle: 30, index: 0 },
    { x: width * 0.95, y: height * 0.15, length: 100, angle: 150, index: 1 },
    { x: width * 0.1, y: height * 0.6, length: 150, angle: 20, index: 2 },
    { x: width * 0.9, y: height * 0.7, length: 130, angle: 160, index: 3 },
    { x: width * 0.05, y: height * 0.85, length: 100, angle: 10, index: 4 },
  ];

  const mushrooms = [
    { x: width * 0.08, y: height * 0.9, size: 25 },
    { x: width * 0.92, y: height * 0.88, size: 20 },
    { x: width * 0.5, y: height * 0.95, size: 22 },
  ];

  const starParticles = Array.from({ length: 60 }, (_, i) => {
    const baseX = ((i * 137.5 + 0.1) % 1) * width;
    const baseY = ((i * 79.3 + 0.2) % 1) * height;
    const speed = 0.2 + (i % 5) * 0.1;
    const drift = Math.sin(progress * speed * Math.PI * 2 + i) * 40;
    const driftY = Math.cos(progress * speed * 0.7 * Math.PI * 2 + i * 0.5) * 30;
    const size = 1 + (i % 3) * 0.5;
    const opacity = 0.1 + (i % 4) * 0.05 + Math.sin(frame * 0.1 + i) * 0.1;
    return { x: baseX + drift, y: baseY + driftY, size, opacity, key: i };
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(to bottom, #0a1a0a 0%, #0d1f0d 30%, #0a150a 60%, #060e06 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        top: height * 0.1, left: width * 0.3,
        width: width * 0.4, height: height * 0.5,
        background: "radial-gradient(ellipse, rgba(100,200,100,0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />
      <div style={{
        position: "absolute",
        top: height * 0.3, left: width * 0.6,
        width: width * 0.3, height: height * 0.4,
        background: "radial-gradient(ellipse, rgba(200,100,200,0.06) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {vines.map((v) => <Vine key={v.index} {...v} />)}
      </svg>

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {flowers.map((f) => <Flower key={f.index} {...f} />)}
      </svg>

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {mushrooms.map((m, i) => (
          <g key={i} transform={`translate(${m.x}, ${m.y})`}>
            <ellipse cx={0} cy={-m.size * 0.3} rx={m.size} ry={m.size * 0.5}
              fill="rgba(220,80,80,0.5)" opacity={0.6} />
            <circle cx={-m.size * 0.3} cy={-m.size * 0.4} r={m.size * 0.15} fill="rgba(255,255,255,0.6)" />
            <circle cx={m.size * 0.2} cy={-m.size * 0.3} r={m.size * 0.12} fill="rgba(255,255,255,0.6)" />
            <circle cx={m.size * 0.4} cy={-m.size * 0.5} r={m.size * 0.1} fill="rgba(255,255,255,0.6)" />
            <rect x={-m.size * 0.15} y={0} width={m.size * 0.3} height={m.size * 0.6}
              fill="rgba(240,220,180,0.5)" rx={m.size * 0.05} />
          </g>
        ))}
      </svg>

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {fireflies.map((f) => <Firefly key={f.index} {...f} />)}
      </svg>

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {butterflies.map((b) => <Butterfly key={b.index} {...b} />)}
      </svg>

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {fairies.map((f) => <Fairy key={f.index} {...f} />)}
      </svg>

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {starParticles.map((p) => (
          <circle key={p.key} cx={p.x} cy={p.y} r={p.size}
            fill="rgba(255,255,200,0.8)" opacity={Math.max(0.05, p.opacity)} />
        ))}
      </svg>

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(5,10,5,0.5) 100%)",
      }} />
    </AbsoluteFill>
  );
};

export default HeroBg;
