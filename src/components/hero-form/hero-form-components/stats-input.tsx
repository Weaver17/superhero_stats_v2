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
import { useForm } from "react-hook-form";

type FormInputProps = {
  formName: string;
  label: string;
  placeholder: string;
  description: string;
};

function HeroFormStatsInput({
  formName,
  label,
  placeholder,
  description,
}: Readonly<FormInputProps>) {
  const heroForm = useForm();

  return (
    <FormField
      control={heroForm.control}
      name={formName}
      render={({ field }) => (
        <FormItem className="">
          <div className="flex justify-between">
            <FormLabel className="text-xl">{label}</FormLabel>
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

export default HeroFormStatsInput;
