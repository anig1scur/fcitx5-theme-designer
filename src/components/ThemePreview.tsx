import { ThemeConfig } from "@/types/theme";

interface ThemePreviewProps {
  config: ThemeConfig;
}

export function ThemePreview({ config }: ThemePreviewProps) {
  const inputPanelStyle = {
    backgroundColor: config.background.color,
    border: `${config.background.borderWidth}px solid ${config.background.borderColor}`,
    margin: '20px',
    width: '300px',
    position: 'relative' as const,
  };

  const contentStyle = {
    padding: `${config.contentMargin.top}px ${config.contentMargin.right}px ${config.contentMargin.bottom}px ${config.contentMargin.left}px`,
  };

  const textStyle = {
    padding: `${config.textMargin.top}px ${config.textMargin.right}px ${config.textMargin.bottom}px ${config.textMargin.left}px`,
  };

  const candidateStyle = {
    ...textStyle,
    color: config.normalColor,
  };

  const highlightedCandidateStyle = {
    ...textStyle,
    backgroundColor: config.highlightBackgroundColor,
    color: config.highlightColor,
  };

  const highlightStyle = {
    backgroundColor: config.highlight.color,
    border: `${config.highlight.borderWidth}px solid ${config.highlight.borderColor}`,
    margin: `${config.highlight.margin.top}px ${config.highlight.margin.right}px ${config.highlight.margin.bottom}px ${config.highlight.margin.left}px`,
  };

  const getPageButtonContainerStyle = () => {
    const baseStyle = {
      display: 'flex',
      color: config.normalColor,
    };

    switch (config.pageButtonAlignment) {
      case 'Top':
        return { ...baseStyle, justifyContent: 'space-between', marginBottom: '8px' };
      case 'Bottom':
        return { ...baseStyle, justifyContent: 'space-between', marginTop: '8px' };
      case 'Left':
        return { ...baseStyle, flexDirection: 'column' as const, position: 'absolute' as const, left: '0', top: '50%', transform: 'translateY(-50%)' };
      case 'Right':
        return { ...baseStyle, flexDirection: 'column' as const, position: 'absolute' as const, right: '0', top: '50%', transform: 'translateY(-50%)' };
      default:
        return baseStyle;
    }
  };

  const renderPageButtons = () => (
    <div style={getPageButtonContainerStyle()}>
      <span>◀</span>
      <span>▶</span>
    </div>
  );

  const blurStyle = config.enableBlur ? {
    backdropFilter: 'blur(8px)',
    padding: `${config.blurMargin.top}px ${config.blurMargin.right}px ${config.blurMargin.bottom}px ${config.blurMargin.left}px`,
  } : {};

  return (
    <div>
      <div className="rounded-lg shadow-lg" style={{ ...inputPanelStyle, ...blurStyle }}>
        {['Top', 'Left'].includes(config.pageButtonAlignment) && renderPageButtons()}
        <div style={contentStyle}>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span style={{ color: config.normalColor }}>ni hao</span>
            </div>
            <div className="space-y-1">
              <div style={{ ...highlightedCandidateStyle, ...highlightStyle }}>
                1. 你好
              </div>
              <div style={candidateStyle}>2. 拟好</div>
              <div style={candidateStyle}>3. 逆号</div>
              <div style={candidateStyle}>4. 倪浩</div>
            </div>
          </div>
        </div>
        {['Bottom', 'Right'].includes(config.pageButtonAlignment) && renderPageButtons()}
      </div>
    </div>
  );
}
