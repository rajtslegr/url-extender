interface CopyButtonProps {
  onCopy: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({ onCopy }) => (
  <button
    type="submit"
    className="rounded-full border border-slate-800 bg-slate-600 px-4 py-2 font-semibold uppercase text-slate-50 shadow"
    onClick={onCopy}
  >
    Copy
  </button>
);

export default CopyButton;
