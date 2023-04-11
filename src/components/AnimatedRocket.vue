<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 800"
    fill="white"
    stroke="black"
    stroke-width="1"
  >
    <g id="Rocket">
      <g id="Fins" fill="#ababab">
        <polygon
          id="fin_2"
          points="474.68 371.86 544.64 444.53 510.01 643.48 485.6 513.8 427.59 483.55 474.68 371.86"
        />
        <polygon
          id="fin_1"
          points="372.41 483.55 314.4 513.8 289.99 643.48 255.36 444.53 325.32 371.86 372.41 483.55"
        />
      </g>
      <g id="Body">
        <path
          id="Path"
          fill="white"
          d="M442.65,515.42S480,470,480,330c0-50,4.76-158.12-80-220-84.76,61.88-80,170-80,220,0,140,37.35,185.42,37.35,185.42Z"
        />
        <path
          fill="gray"
          id="Path-2"
          d="M442.89,515l-4.42,9c-1.43,3.13-5,6-8.47,6H370c-3.44,0-7-2.87-8.47-6l-4.42-9Z"
        />
      </g>
      <g id="Window" fill="#78c3ff">
        <circle id="ellipse" cx="400" cy="274" r="50" />
      </g>
    </g>
    <g id="Flames" fill="white">
      <rect x="430" y="600" width="20" height="100" fill="#ff9e00" />
      <rect x="390" y="650" width="20" height="100" fill="yellow" />
      <rect x="350" y="600" width="20" height="100" fill="#ff9e00" />
    </g>
  </svg>
</template>

<style scoped>
svg {
  transform: rotate(45deg);
}

#Rocket {
  animation: rocketanim infinite 1s 0s linear;
}

#Flames > :first-child {
  animation: flamesanim infinite 1s 0.5s linear;
}

#Flames > :last-child {
  animation: flamesanim infinite 1s 0s linear;
}

#Flames > :nth-child(2) {
  animation: flamesanim infinite 1s 0.3s linear;
}

@keyframes rocketanim {
  0% {
    transform: translateY(0) translateX(0);
  }

  25% {
    transform: translateY(8px) translateX(8px);
  }

  50% {
    transform: translateY(16px) translateX(0px);
  }

  75% {
    transform: translateY(8px) translateX(-8px);
  }

  /* 100% {
    transform: translateY(0) translateX(0);
  } */
}

@keyframes flamesanim {
  /* 0% {
    transform: translateY(0);
  } */
  50% {
    transform: translateY(20px);
  }
}
</style>
