import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEFAULT_THEMES } from "@/lib/theme";
import { ThemeConfig } from "@/types/theme";

interface PresetPreviewProps {
  name: string;
  author?: string;
  url?: string;
  textColor?: string;
  backgroundColor?: string;
  highlightColor?: string;
  highlightBackgroundColor?: string;
}


const PresetThemePreview = (props: PresetPreviewProps) => {
  const {
    name,
    author,
    url,
    textColor = 'black',
    backgroundColor = '#f0f0f0',
    highlightColor = 'white',
    highlightBackgroundColor = 'black'
  } = props;

  return (
    <div className="rounded-lg p-2 pb-3 hover:bg-black/5 transition-colors">
      <div className="space-y-2 mb-3">
        <div>
          <a className="text-gray-900 text-xl font-medium hover:cursor-help" href={ url } target="_blank" >
            <div>{ name }</div>
            <div className="text-sm text-gray-600">{ author }</div>
          </a>
        </div>
      </div>
      <div
        style={ { backgroundColor, color: textColor } }
        className="flex items-end gap-1 w-fit rounded-md overflow-hidden"
      >
        <div
          style={ { backgroundColor: highlightBackgroundColor, color: highlightColor } }
          className="py-2 px-4"
        >
          1. 你好
        </div>
        <div className="py-2 px-4">
          2. 你
        </div>
      </div>
    </div>
  );
}

function mapThemeToPresetPreview(theme: ThemeConfig): PresetPreviewProps {
  return {
    name: theme.name,
    url: theme.url,
    author: theme.author,
    textColor: theme.normalColor,
    backgroundColor: theme.background.color,
    highlightColor: theme.highlightColor || theme.highlightCandidateColor,
    highlightBackgroundColor: theme.highlight.color || theme.highlightBackgroundColor
  }
}

export function PresetTheme({
  themes = DEFAULT_THEMES.map(mapThemeToPresetPreview),
  onSelect,
  selected,
}: {
  themes?: PresetPreviewProps[],
  onSelect?: (index: number) => void,
  selected?: number
}) {

  if (!themes.length) {
    return <div>没有可用的主题</div>;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>预设</CardTitle>
      </CardHeader>
      <CardContent className="text-sm flex items-end gap-2">
        { themes.map((theme, index) => (
          <div
            key={ `theme-${ index }` }
            onClick={ () => onSelect?.(index) }
            className={ `cursor-pointer rounded-md ${ selected === index ? 'bg-gray-100' : '' }` }
          >
            <PresetThemePreview { ...theme } />
          </div>
        )) }
      </CardContent>
    </Card>
  );
}
