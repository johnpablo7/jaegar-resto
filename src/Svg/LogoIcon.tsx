import { SVGProps } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity={0.26} width={56} height={56} rx={12} fill="#EB966A" />
    <path
      d="M39.667 11.333H16.333c-2.756 0-5 2.244-5 5v4.719c0 1.755.637 3.35 1.667 4.576v15.705A1.667 1.667 0 0 0 14.667 43H28a1.667 1.667 0 0 0 1.667-1.667V33h6.666v8.333A1.667 1.667 0 0 0 38 43h3.334A1.667 1.667 0 0 0 43 41.333V25.627a7.09 7.09 0 0 0 1.667-4.577v-4.717c0-2.756-2.244-5-5-5Zm1.666 5v4.719c0 1.9-1.414 3.52-3.151 3.611l-.182.004a3.337 3.337 0 0 1-3.333-3.334v-6.666h5c.92 0 1.666.748 1.666 1.666Zm-16.666 5v-6.666h6.666v6.666A3.337 3.337 0 0 1 28 24.667a3.337 3.337 0 0 1-3.333-3.334Zm-10-5c0-.918.747-1.666 1.667-1.666h5v6.666A3.337 3.337 0 0 1 18 24.667l-.181-.005c-1.737-.09-3.152-1.71-3.152-3.61v-4.719Zm10 18.334H18v-5h6.667v5Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={28}
        y1={11.333}
        x2={28}
        y2={43}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EA9769" />
        <stop offset={1} stopColor="#EA6969" />
      </linearGradient>
    </defs>
  </svg>
);

export default LogoIcon;
