import { ThemeConfig } from "@/types/theme";

interface ThemePreviewProps {
  config: ThemeConfig;
}

export function ThemePreview({ config }: ThemePreviewProps) {
  const inputPanelStyle = {
    fontFamily: config.inputPanelFont,
    backgroundColor: config.backgroundColor,
    border: `${config.borderWidth}px solid ${config.borderColor}`,
    padding: config.contentMargin,
    margin: '20px',
    width: '300px',
  };

  const candidateStyle = {
    padding: `${config.textMargin}px`,
    marginBottom: `${config.spacing}px`,
    color: config.normalColor,
  };

  const highlightedCandidateStyle = {
    ...candidateStyle,
    backgroundColor: config.highlightCandidateBackgroundColor,
    color: config.highlightCandidateColor,
  };

  return (
    <div className="rounded-lg shadow-lg" style={inputPanelStyle}>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span>输入:</span>
          <span>ni hao</span>
        </div>
        <div className="space-y-1">
          <div style={highlightedCandidateStyle}>1. 你好</div>
          <div style={candidateStyle}>2. 拟好</div>
          <div style={candidateStyle}>3. 逆号</div>
          <div style={candidateStyle}>4. 倪浩</div>
        </div>

        {config.pageButtonAlignment === "Bottom" && (
          <div className="flex justify-between mt-2">
            <span style={{ color: config.normalColor }}>◀</span>
            <span style={{ color: config.normalColor }}>▶</span>
          </div>
        )}
      </div>
    </div>
  );
}
