interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const feedbackId = `${id}-feedback`;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-[#1f2a24]">
          {label}
        </label>
      )}
      <input
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error || helperText ? feedbackId : undefined}
        className={`min-h-[48px] w-full rounded-[12px] border border-[#b9cbbb] bg-white px-4 py-3 text-[#1f2a24] placeholder-[#708078] transition-[border-color,box-shadow] duration-200 focus:border-[#285b4a] focus:outline-none focus:ring-2 focus:ring-[#285b4a]/20 ${error ? 'border-[#a7473d] focus:border-[#a7473d] focus:ring-[#a7473d]/20' : ''} ${className}`}
        {...props}
      />
      {error && <span id={feedbackId} className="text-xs font-medium text-[#a7473d]" role="alert">{error}</span>}
      {!error && helperText && <span id={feedbackId} className="text-xs text-[#708078]">{helperText}</span>}
    </div>
  );
};
