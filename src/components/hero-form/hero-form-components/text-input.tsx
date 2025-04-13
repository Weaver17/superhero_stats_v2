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

function HeroFormTextInput({
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
        <FormItem>
          <FormLabel className="text-xl">{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default HeroFormTextInput;
