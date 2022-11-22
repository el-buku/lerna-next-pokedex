export default function PolyLine() {
  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 41,
        width: "100%",
      }}
    >
      <polyline
        points="0,80 100,80 150,28 3000,28"
        style={{ fill: "none", stroke: "white", strokeWidth: 3 }}
      />
    </svg>
  );
}
