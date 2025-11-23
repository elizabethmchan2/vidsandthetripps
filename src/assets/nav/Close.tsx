export const Close = ({ className }: { className?: string }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        y="17.3784"
        width="24.5769"
        height="5.58381"
        rx="2"
        transform="rotate(-45 0 17.3784)"
        fill="black"
      />
      <rect
        x="3.94836"
        width="24.5769"
        height="5.58381"
        rx="2"
        transform="rotate(45 3.94836 0)"
        fill="black"
      />
    </svg>
  );
};
