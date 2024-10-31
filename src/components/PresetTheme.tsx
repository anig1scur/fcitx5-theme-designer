import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PresetPreviewProps {
  name: string;
  author?: string;
  url?: string;
  textColor?: string;
  backgroundColor?: string;
  highlightColor?: string;
  highlightBackgroundColor?: string;
}

// Default theme presets
export const DEFAULT_THEMES: PresetPreviewProps[] = [
  {
    name: "Nord-Light",
    author: "tonyfettes",
    url: "https://github.com/tonyfettes/fcitx5-nord",
    textColor: "#81a1c1",
    backgroundColor: "#e5e9f0",
    highlightColor: "#5e81ac",
    highlightBackgroundColor: "#eceff4"
  },
  {
    name: "Spring",
    author: "thepoy",
    url: "https://github.com/thep0y/fcitx5-themes-candlelight/",
    textColor: "#ffffff",
    backgroundColor: "#000000",
    highlightColor: "#ffffff",
    highlightBackgroundColor: "transparent"
  },
  {
    name: "Dracula",
    url: "",
    textColor: "#f8f8f2",
    backgroundColor: "#282a36",
    highlightColor: "#ff79c6",
    highlightBackgroundColor: "#44475a"
  }
];

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
    <div className="rounded-lg p-2 hover:bg-black/5 transition-colors">
      <div className="space-y-2 mb-3">
        <div>
          <a className="font-medium" href={ url } target="_blank">
            <div>{ name }</div>
            <div className="text-gray-600">{ author }</div>
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
          2. 👋
        </div>
      </div>
    </div>
  );
}

export function PresetTheme({
  themes = DEFAULT_THEMES,
  onSelect
}: {
  themes?: PresetPreviewProps[],
  onSelect?: (index: number) => void
}) {
  if (!themes.length) {
    return <div>没有可用的主题</div>;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>预设</CardTitle>
      </CardHeader>
      <CardContent className="text-sm flex items-end">
        { themes.map((theme, index) => (
          <div
            key={ `theme-${ index }` }
            onClick={ () => onSelect?.(index) }
            className="cursor-pointer"
          >
            <PresetThemePreview { ...theme } />
          </div>
        )) }
      </CardContent>
    </Card>
  );
}
