"use client";

import { useForm } from "react-hook-form";
import { ThemeConfig, Margin, Background, Highlight, PageButton, } from "@/types/theme";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { exportThemeFile } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MarginFieldsProps {
  control: any;
  name: string;
  label: string;
}

const MarginFields = ({ control, name, label }: MarginFieldsProps) => (
  <div className="space-y-4">
    <h4 className="font-medium">{ label }</h4>
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={ control }
        name={ `${ name }.left` }
        render={ ({ field }) => (
          <FormItem>
            <FormLabel>左边距</FormLabel>
            <FormControl>
              <Input type="number" { ...field } onChange={ e => field.onChange(Number(e.target.value)) } />
            </FormControl>
          </FormItem>
        ) }
      />
      <FormField
        control={ control }
        name={ `${ name }.right` }
        render={ ({ field }) => (
          <FormItem>
            <FormLabel>右边距</FormLabel>
            <FormControl>
              <Input type="number" { ...field } onChange={ e => field.onChange(Number(e.target.value)) } />
            </FormControl>
          </FormItem>
        ) }
      />
      <FormField
        control={ control }
        name={ `${ name }.top` }
        render={ ({ field }) => (
          <FormItem>
            <FormLabel>上边距</FormLabel>
            <FormControl>
              <Input type="number" { ...field } onChange={ e => field.onChange(Number(e.target.value)) } />
            </FormControl>
          </FormItem>
        ) }
      />
      <FormField
        control={ control }
        name={ `${ name }.bottom` }
        render={ ({ field }) => (
          <FormItem>
            <FormLabel>下边距</FormLabel>
            <FormControl>
              <Input type="number" { ...field } onChange={ e => field.onChange(Number(e.target.value)) } />
            </FormControl>
          </FormItem>
        ) }
      />
    </div>
  </div>
);

interface BackgroundFieldsProps {
  control: any;
  name: string;
  label: string;
}

const BackgroundFields = ({ control, name, label }: BackgroundFieldsProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{ label }</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 flex items-baseline gap-12">
      <FormField
        control={ control }
        name={ `${ name }.color` }
        render={ ({ field }) => (
          <FormItem>
            <FormLabel>背景颜色</FormLabel>
            <FormControl>
              <Input type="color" { ...field } className="h-10 w-20" />
            </FormControl>
          </FormItem>
        ) }
      />
      <FormField
        control={ control }
        name={ `${ name }.borderColor` }
        render={ ({ field }) => (
          <FormItem>
            <FormLabel>边框颜色</FormLabel>
            <FormControl>
              <Input type="color" { ...field } className="h-10 w-20" />
            </FormControl>
          </FormItem>
        ) }
      />
      <FormField
        control={ control }
        name={ `${ name }.borderWidth` }
        render={ ({ field }) => (
          <FormItem>
            <FormLabel>边框宽度 ({ field.value }px)</FormLabel>
            <FormControl>
              <Slider
                min={ 0 }
                max={ 10 }
                step={ 1 }
                value={ [field.value] }
                onValueChange={ (value) => field.onChange(value[0]) }
              />
            </FormControl>
          </FormItem>
        ) }
      />
      {/* <FormField
        control={control}
        name={`${name}.gravity`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>叠加层位置</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="选择位置" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Top Left">左上</SelectItem>
                <SelectItem value="Top Right">右上</SelectItem>
                <SelectItem value="Bottom Left">左下</SelectItem>
                <SelectItem value="Bottom Right">右下</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      /> */}
      {/* <MarginFields control={control} name={`${name}.margin`} label="边距设置" /> */ }
    </CardContent>
  </Card>
);

interface ThemeConfigFormProps {
  initialConfig: ThemeConfig;
  onConfigChange: (config: ThemeConfig) => void;
  onConfigExport: () => void;
}

export function ThemeConfigForm({ initialConfig, onConfigChange, onConfigExport }: ThemeConfigFormProps) {
  const form = useForm<ThemeConfig>({
    defaultValues: initialConfig,
  });

  const onSubmit = (data: ThemeConfig) => {
    onConfigChange(data);
  };

  const exportTheme = () => {
    exportThemeFile(form.getValues());
  };



  return (
    <Form { ...form }>
      <form onChange={ form.handleSubmit(onSubmit) } className="space-y-6">
        {/* Metadata Section */ }
        <Card>
          <CardHeader>
            <CardTitle>主题</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={ form.control }
              name="name"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>名称</FormLabel>
                  <FormControl>
                    <Input { ...field } autoComplete="false" />
                  </FormControl>
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="author"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>作者</FormLabel>
                  <FormControl>
                    <Input { ...field } autoComplete="false" />
                  </FormControl>
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="description"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>描述</FormLabel>
                  <FormControl>
                    <Input { ...field } autoComplete="false" />
                  </FormControl>
                </FormItem>
              ) }
            />
          </CardContent>
        </Card>

        {/* Input Panel Settings */ }
        <Card>
          <CardHeader>
            <CardTitle>输入面板设置</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-10">
              <FormField
                control={ form.control }
                name="normalColor"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>普通文字颜色</FormLabel>
                    <FormControl>
                      <Input type="color" { ...field } className="h-10 w-20" />
                    </FormControl>
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name="highlightColor"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>高亮文字颜色</FormLabel>
                    <FormControl>
                      <Input type="color" { ...field } className="h-10 w-20" />
                    </FormControl>
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name="highlightBackgroundColor"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>高亮背景颜色</FormLabel>
                    <FormControl>
                      <Input type="color" { ...field } className="h-10 w-20" />
                    </FormControl>
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name="highlightCandidateColor"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>候选词高亮颜色</FormLabel>
                    <FormControl>
                      <Input type="color" { ...field } className="h-10 w-20" />
                    </FormControl>
                  </FormItem>
                ) }
              />
            </div>
            {/* <div className="flex gap-10">
              <FormField
                control={ form.control }
                name="enableBlur"
                render={ ({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={ field.value }
                        onCheckedChange={ field.onChange }
                      />
                    </FormControl>
                    <FormLabel>启用模糊效果</FormLabel>
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name="fullWidthHighlight"
                render={ ({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={ field.value }
                        onCheckedChange={ field.onChange }
                      />
                    </FormControl>
                    <FormLabel>使用全宽高亮</FormLabel>
                  </FormItem>
                ) }
              />


              <FormField
                control={ form.control }
                name="pageButtonAlignment"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>分页按钮对齐</FormLabel>
                    <Select onValueChange={ field.onChange } value={ field.value }>
                      <SelectTrigger>
                        <SelectValue placeholder="选择对齐方式" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Top">顶部</SelectItem>
                        <SelectItem value="Bottom">底部</SelectItem>
                        <SelectItem value="Left">左侧</SelectItem>
                        <SelectItem value="Right">右侧</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                ) }
              />

            </div> */}
            <MarginFields control={ form.control } name="textMargin" label="文本边距" />
          </CardContent>

        </Card>

        {/* Margins */ }
        {/* <Card>
          <CardHeader>
            <CardTitle>边距设置</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <MarginFields control={ form.control } name="blurMargin" label="模糊边距" />
            <MarginFields control={ form.control } name="textMargin" label="文本边距" />
            <MarginFields control={ form.control } name="shadowMargin" label="阴影边距" />
          </CardContent>
        </Card> */}

        {/* Background and Highlight */ }
        <BackgroundFields control={ form.control } name="background" label="背景设置" />
        <BackgroundFields control={ form.control } name="highlight" label="高亮设置" />

        <div className="flex justify-end">
          <Button onClick={ exportTheme }>导出主题</Button>
        </div>
      </form>
    </Form>
  );
}
