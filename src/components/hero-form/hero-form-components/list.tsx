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

type FormListProps = {
  formName: string;
  label: string;
  description: string;
};

function HeroFormList({
  formName,
  label,

  description,
}: Readonly<FormListProps>) {
  const heroForm = useForm();

  return (
    <FormField
      control={heroForm.control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xl">{label}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default HeroFormList;
