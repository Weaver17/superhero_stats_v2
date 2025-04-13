import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm } from "react-hook-form";

type FormDropdownProps = {
  formName: string;
  label: string;
  placeholder: string;
  description: string;
  options: string[];
};

function HeroFormDropdown({
  formName,
  label,
  placeholder,
  description,
  options,
}: Readonly<FormDropdownProps>) {
  const heroForm = useForm();

  return (
    <FormField
      control={heroForm.control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xl">{label}</FormLabel>
          <Select>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((o, i) => (
                <SelectItem key={`${o} - ${i}`} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default HeroFormDropdown;
