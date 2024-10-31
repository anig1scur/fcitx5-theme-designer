import { ThemeConfig } from "@/types/theme";

interface ThemePreviewProps {
  config: ThemeConfig;
  direction?: 'horizontal' | 'vertical';
}

export function ThemePreview({ config, direction = 'vertical' }: ThemePreviewProps) {
  const inputPanelStyle = {
    backgroundColor: config.background.color,
    marginBottom: '20px',
    width: 'fit-content',
    position: 'relative' as const,
  };

  const textStyle = {
    padding: `${ config.textMargin.top }px ${ config.textMargin.right }px ${ config.textMargin.bottom }px ${ config.textMargin.left }px`,
  };

  const candidateStyle = {
    ...textStyle,
    whiteSpace: "nowrap",
    color: config.normalColor,
  };

  const highlightedCandidateStyle = {
    ...textStyle,
    backgroundColor: config.highlightBackgroundColor,
    color: config.highlightColor,
  };

  const highlightStyle = {
    backgroundColor: config.highlight.color,
    whiteSpace: "nowrap",
    // padding: `${ config.highlight.margin.top }px ${ config.highlight.margin.right }px ${ config.highlight.margin.bottom }px ${ config.highlight.margin.left }px`,
    padding: `${ config.textMargin.top }px ${ config.textMargin.right }px ${ config.textMargin.bottom }px ${ config.textMargin.left }px`,
  };

  const candidatesContainerStyle = {
    display: 'flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
  } as const;

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
    <div style={ getPageButtonContainerStyle() }>
      <span>◀</span>
      <span>▶</span>
    </div>
  );

  const blurStyle = config.enableBlur ? {
    backdropFilter: 'blur(8px)',
    padding: `${ config.blurMargin.top }px ${ config.blurMargin.right }px ${ config.blurMargin.bottom }px ${ config.blurMargin.left }px`,
  } : {};


  return (
    <div>
      <div style={ { ...inputPanelStyle, ...blurStyle } }>
        {/* { ['Top', 'Left'].includes(config.pageButtonAlignment) && renderPageButtons() } */ }
        <div className="flex items-center space-x-2 p-2">
          <span style={ { color: config.normalColor } }>ni hao</span>
        </div>
        <div style={ candidatesContainerStyle }>
          <div style={ { ...highlightedCandidateStyle, ...highlightStyle } }>
            1. 你好
          </div>
          <div style={ { ...candidateStyle } }>2. 拟好</div>
          <div style={ { ...candidateStyle } }>3. 逆号</div>
          <div style={ { ...candidateStyle } }>4. 倪浩</div>
          <div style={ { ...candidateStyle } }>5. 👋</div>
          <div style={ { ...candidateStyle } }>6. 你</div>
          <div style={ { ...candidateStyle } }>7. 拟</div>
        </div>
        {/* { ['Bottom', 'Right'].includes(config.pageButtonAlignment) && renderPageButtons() } */ }
      </div>
    </div>
  );
}

export function Preview({ config }: { config: ThemeConfig }) {
  return (
    <>
      <ThemePreview config={ config } direction="horizontal" />
      <ThemePreview config={ config } direction="vertical" />
    </>
  );
}
