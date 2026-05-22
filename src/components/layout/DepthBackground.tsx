export function DepthBackground() {
  return (
    <div className="depth-background" aria-hidden="true">
      <div className="depth-glow depth-glow-top" />
      <div className="depth-glow depth-glow-mid" />
      <div className="depth-glow depth-glow-bottom" />
      <div className="depth-plane depth-plane-a" />
      <div className="depth-plane depth-plane-b" />
    </div>
  );
}
