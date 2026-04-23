interface Props {
  title: string;
  className?: string;
  isMultiline?: boolean;
  backgroundColor: string;
}

function TextField({ title, className, isMultiline, backgroundColor }: Props) {
  return (
    <div className={className}>
      <p>{title}</p>
      {isMultiline ? (
        <textarea
          className={`outline-none rounded-lg px-4 py-2 ${backgroundColor} w-full min-h-50`}
        />
      ) : (
        <input
          type="text"
          className={`outline-none rounded-lg px-4 py-2 ${backgroundColor} w-full`}
        />
      )}
    </div>
  );
}

export default TextField;
