interface ProgressProps {
  progress: number;
}

const Progress = ({ progress }: ProgressProps) => {
  return (
    <div className="bg-gray-300 h-2 w-full">
      <div className="bg-[#019F44] h-2 transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Progress;
