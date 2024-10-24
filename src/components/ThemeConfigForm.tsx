"use client";

import { useForm } from "react-hook-form";
import { ThemeConfig } from "@/types/theme";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface ThemeConfigFormProps {
  initialConfig: ThemeConfig;
  onConfigChange: (config: ThemeConfig) => void;
}

export function ThemeConfigForm({ initialConfig, onConfigChange }: ThemeConfigFormProps) {
  const form = useForm<ThemeConfig>({
    defaultValues: initialConfig,
  });

  const onSubmit = (data: ThemeConfig) => {
    onConfigChange(data);
  };

  return (
    <Form { ...form }>
      <form onChange={ form.handleSubmit(onSubmit) } className="space-y-6">
        {/* 字体设置 */ }
        <div className="space-y-4">
          <h3 className="text-lg font-medium">字体设置</h3>
          <FormField
            control={ form.control }
            name="inputPanelFont"
            render={ ({ field }) => (
              <FormItem>
                <FormLabel>输入面板字体</FormLabel>
                <FormControl>
                  <Input { ...field } />
                </FormControl>
              </FormItem>
            ) }
          />
          {/* 类似的字体设置项... */ }
        </div>

        {/* 颜色设置 */ }
        <div className="space-y-4">
          <h3 className="text-lg font-medium">颜色设置</h3>
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
          {/* 其他颜色设置项... */ }
        </div>

        {/* 布局设置 */ }
        <div className="space-y-4">
          <h3 className="text-lg font-medium">布局设置</h3>
          <FormField
            control={ form.control }
            name="contentMargin"
            render={ ({ field }) => (
              <FormItem>
                <FormLabel>内容边距 ({ field.value }px)</FormLabel>
                <FormControl>
                  <Slider
                    min={ 0 }
                    max={ 20 }
                    step={ 1 }
                    value={ [field.value] }
                    onValueChange={ (value) => field.onChange(value[0]) }
                  />
                </FormControl>
              </FormItem>
            ) }
          />
          {/* 其他布局设置项... */ }
        </div>
      </form>
    </Form>
  );
}
