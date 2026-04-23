interface Props {
  title: string;
  className?: string;
  isMultiline?: boolean;
}

function TextField({ title, className, isMultiline }: Props) {
  return (
    <div className={className}>
      <p>{title}</p>
      {isMultiline ? (
        <textarea
          className="outline-none rounded-lg px-4 py-2 bg-red-500/30 w-full min-h-50"
        />
      ) : (
        <input
          type="text"
          className="outline-none rounded-lg px-4 py-2 bg-red-500/30 w-full"
        />
      )}
    </div>
  );
}

export default TextField;
