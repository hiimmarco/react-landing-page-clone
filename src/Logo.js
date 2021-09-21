import { css } from '@emotion/react';
import React from 'react';

/** @jsxImportSource @emotion/react */

const logo = css`
  justify-content: flex-start;
  padding-top: 6px;
`;

function Headerlogo() {
  return (
    <svg
      css={logo}
      width="96"
      height="40"
      viewBox="0 0 395 104"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="w-24 text-black"
    >
      <path d="M161.528 19.14H117V30.364H132.548V78.02H145.98V30.364H161.528V19.14Z"></path>{' '}
      <path d="M193.511 35.516L192.131 40.576C188.911 36.896 184.403 34.412 178.239 34.412C167.199 34.412 158.551 42.784 158.551 56.952C158.551 71.028 167.199 79.4 178.239 79.4C184.403 79.4 189.003 76.916 192.131 73.236L193.419 78.112H203.723V35.516H193.511ZM181.735 68.82C175.663 68.82 171.339 63.852 171.339 56.952C171.339 49.96 175.663 44.992 181.735 44.992C187.991 44.992 192.407 49.96 192.407 56.952C192.407 63.852 187.991 68.82 181.735 68.82Z"></path>{' '}
      <path d="M221.392 28.8C225.348 28.8 228.568 25.764 228.568 21.9C228.568 18.128 225.348 15 221.392 15C217.436 15 214.216 18.128 214.216 21.9C214.216 25.764 217.436 28.8 221.392 28.8ZM215.228 78.02H227.648V35.516H215.228V78.02Z"></path>{' '}
      <path d="M239.037 78.02H251.549V15.46H239.037V78.02Z"></path>{' '}
      <path d="M283.357 79.4C297.249 79.4 307.001 69.832 307.001 56.952C307.001 43.98 297.249 34.412 283.357 34.412C269.465 34.412 259.805 43.98 259.805 56.952C259.805 69.832 269.465 79.4 283.357 79.4ZM283.357 68.82C277.193 68.82 272.685 63.852 272.685 56.952C272.685 49.96 277.193 44.992 283.357 44.992C289.613 44.992 294.121 49.96 294.121 56.952C294.121 63.852 289.613 68.82 283.357 68.82Z"></path>{' '}
      <path d="M338.5 34.412C333.072 34.412 330.036 37.448 327.736 41.22L326.172 35.516H315.224V78.02H327.736V57.78C327.736 50.88 331.324 45.176 337.672 45.176C339.236 45.176 340.708 45.544 341.904 46.096L345.4 35.976C345.4 35.976 342.64 34.412 338.5 34.412Z"></path>{' '}
      <path d="M381.209 35.516L370.261 62.564L359.497 35.516H346.249L364.189 77.008L354.989 97.34H367.685L394.457 35.516H381.209Z"></path>{' '}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.70873 17.0054C3.79345 18.0545 1.30483 21.4627 2.15025 24.6178L13.4457 66.773L78.1921 11.2643L76.4366 4.71286C75.5912 1.55773 71.7319 -0.149542 67.8166 0.899555L7.70873 17.0054ZM83.8571 32.4065L29.7721 98.9457L89.7797 82.8668C93.695 81.8177 96.1836 78.4095 95.3382 75.2543L83.8571 32.4065Z"
        fill="url(#paint0_linear)"
      ></path>{' '}
      <path
        d="M2.76368 86.6999C-0.868932 90.3326 -0.944842 96.2933 2.68026 99.9184L3.20353 100.442C6.82858 104.067 12.7969 103.991 16.422 100.366L95 8.12206L2.76368 86.6999ZM13.5629 96.2328C11.8186 97.977 8.99743 97.977 7.25325 96.2328L7.20775 96.1873C5.46348 94.443 5.46348 91.6218 7.20775 89.8776L13.4415 84.5992C15.1554 83.4844 16.892 83.0142 18.6364 84.7585L18.6819 84.7964C20.4261 86.5407 20.3276 88.429 18.917 90.067L13.5629 96.2328Z"
        fill="url(#paint1_linear)"
      ></path>{' '}
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="37.7623"
          y1="8.95248"
          x2="59.7254"
          y2="90.9197"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFBA42"></stop>{' '}
          <stop offset="1" stop-color="#F65856"></stop>
        </linearGradient>{' '}
        <linearGradient
          id="paint1_linear"
          x1="21"
          y1="-16"
          x2="32"
          y2="109"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#000"></stop>{' '}
          <stop offset="1" stop-color="#222"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
export default Headerlogo;
