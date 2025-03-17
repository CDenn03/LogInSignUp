import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

function Input({
  className,
  type = "text",
  value,
  onChange,
  isMatch, 
  ...props
}) {
  const [isView, setIsView] = useState(false);

  // Determine the input type: toggle between "password" and "text" only for password inputs
  const inputType = type === "password" && !isView ? "password" : "text";

  return (
    <div className="relative">
      <input
        type={type === "password" ? inputType : type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          isMatch === true && "border-green-500 border-[1.5px]",
          isMatch === false && "border-red-500 border-[1.5px]", 
          className
        )}
        value={value}
        onChange={onChange}
        {...props}
      />
      {/* Render the eye icon only for password inputs */}
      {type === "password" && (
        <div
          className="absolute right-3 top-2.5 z-10 cursor-pointer text-gray-500"
          onClick={() => setIsView(!isView)}
        >
          {isView ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      )}
    </div>
  );
}

export { Input };