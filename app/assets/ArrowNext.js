const ArrowNext = ({ arrowColor }) => (
  <svg
    width="19"
    height="9"
    viewBox="0 0 19 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.935211 4.5C0.935211 4.22386 1.15907 4 1.43521 4L17.4352 4C17.7114 4 17.9352 4.22386 17.9352 4.5C17.9352 4.77614 17.7114 5 17.4352 5L1.43521 5C1.15907 5 0.935211 4.77614 0.935211 4.5Z"
      fill={arrowColor ? arrowColor : "#333333"}
      // fill="#333333"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5817 0.646447C13.7769 0.451184 14.0935 0.451184 14.2888 0.646447L18.1423 4.5L14.2888 8.35355C14.0935 8.54882 13.7769 8.54882 13.5817 8.35355C13.3864 8.15829 13.3864 7.84171 13.5817 7.64645L16.7281 4.5L13.5817 1.35355C13.3864 1.15829 13.3864 0.841709 13.5817 0.646447Z"
      fill={arrowColor ? arrowColor : "#333333"}
      // fill="#333333"
    />
  </svg>
);

export default ArrowNext;
