const Logo = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
    fill={color && color}
  >
    <title>house-logo-vector</title>
    <g id="Background" />
    <g id="House">
      <polygon points="575.76 86.05 350.95 328.75 216.06 338.33 318.25 244.66 220.83 239.19 157.48 112.71 386.37 159.2 575.76 86.05" />
      <polygon points="676.58 333.54 676.58 308.93 566.22 132.54 575.76 115.45 711.33 333.54 676.58 333.54" />
      <polygon points="172.46 170.83 151.35 271.33 120.69 271.33 151.35 132.54 172.46 170.83" />
      <polygon points="151.35 296.63 151.35 349.95 88.67 349.95 151.35 296.63" />
    </g>
    <g id="Text">
      <text
        transform="translate(258.23 503.45)"
        fontSize="36.3"
        fontFamily="OpenSans-Semibold, Open Sans"
        fontWeight="700"
      >
        <tspan letterSpacing="0.07em">Move Forward</tspan>
      </text>
      <text
        transform="translate(78 450.64)"
        fontSize="96.81"
        fontFamily="BrunoAce-Regular, Bruno Ace"
      >
        <tspan x="81.87" y="0">
          COMPANY
        </tspan>
      </text>
    </g>
  </svg>
);

export default Logo;
