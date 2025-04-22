import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  formName: string;
  label: string;
  placeholder: string;
  description: string;
};

function HeroFormNumberInput({
  formName,
  label,
  placeholder,
  description,
}: Readonly<FormInputProps>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={formName}
      render={({ field }) => (
        <FormItem className="">
          <div className="flex justify-between">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                type="number"
                className="no-spinner max-w-[25%] text-center"
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          </div>
          <div>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}

export default HeroFormNumberInput;
