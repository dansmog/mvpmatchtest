import "./header.styles.css";

interface IHeader {}

const Header = () => {
  return (
    <header>
      <div className="app__wrapper">
        <nav className="d-flex justify-content-between align-items-center">
          <div className="nav--left">
            <span>
              <svg
                width="27"
                height="40"
                viewBox="0 0 27 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.87939 39.9615V32.041L12.9344 32.0965C15.8744 32.1649 18.3099 29.9348 18.5663 27.2947C18.8764 24.2785 16.3375 21.2581 12.9344 21.288L20.9315 17.0629C25.1782 20.0064 27.3697 25.1287 26.4641 29.9049C25.3394 35.8859 19.5711 40.4357 12.9303 39.9445L4.87939 39.9615Z"
                  fill="url(#paint0_linear_36_5004)"
                />
                <path
                  d="M6.89306 14.568H0V39.9616H6.89306V14.568Z"
                  fill="url(#paint1_linear_36_5004)"
                />
                <path
                  d="M0 0V6.85678H13.1162C14.106 6.85678 15.0552 7.26299 15.7551 7.98606C16.4549 8.70912 16.8481 9.68981 16.8481 10.7124C16.8481 11.7349 16.4549 12.7156 15.7551 13.4387C15.0552 14.1618 14.106 14.568 13.1162 14.568H0V21.382H13.844C19.2815 21.1513 23.6481 16.7809 24.0409 11.5348C24.4544 5.77593 20.0217 0.427214 14.0466 0H0Z"
                  fill="url(#paint2_linear_36_5004)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_36_5004"
                    x1="19.2816"
                    y1="20.596"
                    x2="10.9532"
                    y2="43.4265"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00628B" />
                    <stop offset="0.03" stopColor="#006792" />
                    <stop offset="0.19" stopColor="#007BAF" />
                    <stop offset="0.36" stopColor="#008BC6" />
                    <stop offset="0.54" stopColor="#0096D6" />
                    <stop offset="0.74" stopColor="#009DE0" />
                    <stop offset="1" stopColor="#009FE3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_36_5004"
                    x1="3.45273"
                    y1="16.3495"
                    x2="3.4439"
                    y2="29.4393"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.47" stopColor="#00628B" />
                    <stop offset="1" stopColor="#009FE3" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_36_5004"
                    x1="5.9172"
                    y1="4.04998"
                    x2="12.6007"
                    y2="14.9016"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.28" stopColor="#00628B" />
                    <stop offset="1" stopColor="#009FE3" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="sidebar__toggler">
                <svg
                  width="31"
                  height="27"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.92857C0 1.41708 0.203189 0.926543 0.564866 0.564866C0.926543 0.203189 1.41708 0 1.92857 0H28.9286C29.4401 0 29.9306 0.203189 30.2923 0.564866C30.654 0.926543 30.8571 1.41708 30.8571 1.92857C30.8571 2.44006 30.654 2.9306 30.2923 3.29228C29.9306 3.65395 29.4401 3.85714 28.9286 3.85714H1.92857C1.41708 3.85714 0.926543 3.65395 0.564866 3.29228C0.203189 2.9306 0 2.44006 0 1.92857Z"
                    fill="#005B96"
                  />
                  <path
                    d="M0 25.0714C0 24.5599 0.203189 24.0694 0.564866 23.7077C0.926543 23.346 1.41708 23.1429 1.92857 23.1429H28.9286C29.4401 23.1429 29.9306 23.346 30.2923 23.7077C30.654 24.0694 30.8571 24.5599 30.8571 25.0714C30.8571 25.5829 30.654 26.0735 30.2923 26.4351C29.9306 26.7968 29.4401 27 28.9286 27H1.92857C1.41708 27 0.926543 26.7968 0.564866 26.4351C0.203189 26.0735 0 25.5829 0 25.0714Z"
                    fill="#005B96"
                  />
                  <path
                    d="M1.92857 11.5714C1.41708 11.5714 0.926543 11.7746 0.564866 12.1363C0.203189 12.498 0 12.9885 0 13.5C0 14.0115 0.203189 14.502 0.564866 14.8637C0.926543 15.2254 1.41708 15.4286 1.92857 15.4286H17.3571C17.8686 15.4286 18.3592 15.2254 18.7208 14.8637C19.0825 14.502 19.2857 14.0115 19.2857 13.5C19.2857 12.9885 19.0825 12.498 18.7208 12.1363C18.3592 11.7746 17.8686 11.5714 17.3571 11.5714H1.92857Z"
                    fill="#005B96"
                  />
                </svg>
              </span>
            </span>
          </div>
          <div className="nav--right d-flex align-items-center">
            <span>JD</span>
            <p>John Doe</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
