interface CopyButtonProps {
  onCopy: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({ onCopy }) => (
  <button
    type="submit"
    className="rounded-full border px-4 py-2 font-bold uppercase shadow"
    onClick={onCopy}
  >
    Copy
  </button>
);

export default CopyButton;
