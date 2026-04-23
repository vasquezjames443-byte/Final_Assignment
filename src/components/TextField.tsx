import { forwardRef, type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  title: string;
  className?: string;
  isMultiline?: boolean;
  backgroundColor: string;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement & HTMLTextAreaElement, Props>(
  ({ title, className, isMultiline, backgroundColor, error, ...rest }, ref) => {
    return (
      <div className={className}>
        <p className="font-medium">{title}</p>
        {isMultiline ? (
          <textarea
            ref={ref}
            {...rest}
            className={`outline-none rounded-lg px-4 py-2 ${backgroundColor} w-full min-h-50`}
          />
        ) : (
          <input
            ref={ref}
            type="text"
            {...rest}
            className={`outline-none rounded-lg px-4 py-2 ${backgroundColor} w-full`}
          />
        )}
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
