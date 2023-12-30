const I18N = ({ color = "#000000" }: { color?: string }) => {
  return (
    <svg
      enableBackground="new 0 0 50 50"
      height="18px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 50 50"
      width="18px"
    >
      <rect fill="none" height="50" width="50" />
      <circle
        cx="25"
        cy="25"
        fill="none"
        r="24"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <ellipse
        cx="25"
        cy="25"
        fill="none"
        rx="12"
        ry="24"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="1"
        x2="49"
        y1="25"
        y2="25"
      />
      <line
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="25"
        x2="25"
        y1="1"
        y2="49"
      />
    </svg>
  );
};

export default I18N;
