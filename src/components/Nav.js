import React from "react"

function Nav({ title }) {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            version="1.0"
            className="fill-current h-8 w-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="1280.000000pt"
            viewBox="0 0 720.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path d="M3881 12720 c-13 -36 -104 -283 -202 -548 l-179 -484 -2 -321 c-2 -254 -3 -288 -8 -162 l-5 160 -5 -157 c-3 -86 -8 -159 -12 -163 -4 -4 -451 -71 -995 -149 l-988 -141 -77 -840 c-42 -462 -77 -879 -77 -927 l-1 -88 1062 0 1061 0 -6 -157 c-4 -87 -7 -189 -7 -226 l0 -68 -52 5 c-29 4 -138 11 -243 16 -104 6 -270 15 -367 20 -98 6 -258 14 -355 20 -98 5 -263 14 -368 20 -104 6 -298 17 -430 25 l-240 15 -105 -108 c-57 -59 -369 -379 -692 -711 l-588 -604 0 -77 0 -78 818 -618 817 -619 45 3 c37 2 769 66 1570 136 85 8 156 13 158 11 2 -1 -2 -364 -8 -806 -5 -442 -15 -1164 -20 -1604 -6 -440 -15 -1142 -20 -1560 -5 -418 -13 -1003 -16 -1301 l-7 -541 33 -6 c18 -4 71 -7 119 -7 47 0 252 -18 456 -40 203 -21 371 -37 374 -35 2 3 -1 166 -8 362 -6 197 -43 1339 -81 2538 -39 1199 -77 2378 -85 2620 -8 241 -13 441 -11 443 2 2 411 39 907 82 497 44 966 85 1043 92 l139 13 -2 100 c-2 66 -51 434 -144 1074 l-142 975 -30 7 c-17 4 -129 12 -250 18 -219 11 -415 22 -740 41 -93 5 -253 14 -355 20 -102 6 -256 14 -343 19 -87 5 -160 10 -162 12 -2 2 -6 111 -10 242 l-8 237 1119 0 1119 1 463 644 462 644 0 79 0 78 -42 30 c-24 17 -333 246 -688 509 -355 263 -654 480 -665 482 -11 2 -427 -55 -925 -126 -500 -72 -907 -126 -910 -121 -3 5 -16 355 -29 777 -13 422 -26 795 -30 828 l-6 60 -24 -65z" />
            </g>
          </svg>
          <span className="font-semibold text-xl tracking-tight">{title}</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="/"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Nav
