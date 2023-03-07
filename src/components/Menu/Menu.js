import React, { Component } from "react";
import styles from "./Menu.module.scss";
import MenuItem from "../MenuItem";
import worklogo from "../../img/Logo Work5.png";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.iconSelector = this.iconSelector.bind(this);
  }

  iconSelector(id) {
    switch (id) {
      case 1:
        return (
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9921 17.9893C17.3454 17.9893 17.6315 17.7033 17.6315 17.35V10.4353H19.3307C19.9532 10.4353 20.4579 9.93063 20.4579 9.30815C20.4579 8.95485 20.2896 8.63519 20.0373 8.4333C14.9565 4.02544 15.3939 4.41239 11.1879 0.761603C10.7673 0.391477 10.1448 0.391477 9.72422 0.761603L0.841196 8.46695C0.487894 8.76978 0.353303 9.2745 0.521542 9.71192C0.689781 10.1493 1.11038 10.4353 1.58145 10.4353H3.28066V17.35C3.28066 17.7033 3.56667 17.9893 3.93679 17.9893H7.75582V12.9589C7.75582 12.2523 8.32783 11.6635 9.03444 11.6635H11.8609C12.5675 11.6635 13.1563 12.2355 13.1563 12.9589V17.9893H16.9753H16.9921Z"
              stroke="#7A7B7B"
              strokeWidth="0.942139"
              strokeMiterlimit="10"
            />
          </svg>
        );
      case 2:
        return (
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.90057 12.2011L3.53094 13.848V15.4782H19.9671M0.220184 0.403336L2.90912 1.88225L3.39649 3.57964L5.88376 12.2011H18.2361C19.0259 12.2011 21.2947 5.49551 20.2024 5.37787L3.699 3.57964"
              stroke="#7D7D7D"
              strokeWidth="0.941128"
              strokeMiterlimit="22.9256"
            />
            <path
              d="M7.16101 15.8605C7.73151 15.8605 8.20715 16.332 8.20715 16.9403C8.20715 17.5486 7.73151 18.0201 7.16101 18.0201C6.59051 18.0201 6.11487 17.5486 6.11487 16.9403C6.11487 16.332 6.5905 15.8605 7.16101 15.8605Z"
              fill="white"
              stroke="#7D7D7D"
            />
            <path
              d="M15.6648 15.8438C16.2353 15.8438 16.7109 16.3152 16.7109 16.9235C16.7109 17.5318 16.2353 18.0033 15.6648 18.0033C15.0943 18.0033 14.6186 17.5318 14.6186 16.9235C14.6186 16.3152 15.0943 15.8438 15.6648 15.8438Z"
              fill="white"
              stroke="#7D7D7D"
            />
          </svg>
        );
      case 3:
        return (
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1.5L15.5 2C13.5 3.5 13 3.5 6.5 6C5.06299 6.5527 3.88888 6.74019 3 6.8005M16 1.5C16 1 16.5 1 16.5 1H17.5C17.5 1 18 1 18 1.5C18 2 18 3.5 18 3.5C18 3.5 18 5.32843 18 6.5M16 1.5V16M16 16C16 16 16 16.5 16.5 16.5C17 16.5 17.5 16.5 17.5 16.5C17.5 16.5 18 16.5 18 16C18 15.5 18 11.5 18 11.5M16 16C15 15 11.5975 13.0993 9.5 12.5C9.02927 12.3655 8.30348 12.1605 7.5 11.9374M18 6.5C18 8.25736 18 11.5 18 11.5M18 6.5C20 6.5 21 7.5 21 9C21 10.5 20 11.5 18 11.5M4.90018 11.2316C4.57624 11.1465 4.27177 11.0679 4 11C3.63299 10.9082 3.29966 10.8502 3 10.8134M4.90018 11.2316V18.1713C4.93942 18.4643 5.08397 18.5253 5.5 18.5H7C7.41132 18.497 7.52726 18.3932 7.5 18V11.9374M4.90018 11.2316C5.71386 11.4456 6.65037 11.7016 7.5 11.9374M3 6.8005C1.69046 6.88936 1 6.70216 1 7C1 7.5 1 10.1 1 10.5C1 10.9082 1.66667 10.6498 3 10.8134M3 6.8005V10.8134"
              stroke="#7D7D7D"
            />
          </svg>
        );
      case 4:
        return (
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_76)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.94472 11.0862H19.4181C19.4181 16.2931 15.1778 20.5345 9.94472 20.5345C4.71163 20.5345 0.471319 16.3103 0.471319 11.0862C0.471319 5.8793 4.71163 1.63792 9.94472 1.63792V11.0862V11.0862Z"
                stroke="#7A7B7B"
                strokeWidth="0.941215"
                strokeMiterlimit="22.9256"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9807 9.01724V0.482758C16.709 0.482758 20.5287 4.2931 20.5287 9.01724H11.9807V9.01724Z"
                stroke="#7A7B7B"
                strokeWidth="0.941215"
                strokeMiterlimit="22.9256"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_76">
                <rect width="21" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 5:
        return (
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_83)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.44094 4.49704H18.4838C19.578 4.49704 20.4534 5.38925 20.4534 6.46663V15.9947C20.4534 17.0889 19.5612 17.9643 18.4838 17.9643H2.44094C1.34673 17.9643 0.471355 17.0721 0.471355 15.9947V6.46663C0.471355 5.37241 1.36356 4.49704 2.44094 4.49704V4.49704Z"
                stroke="#7D7D7D"
                strokeWidth="0.942709"
                strokeMiterlimit="22.9256"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4703 9.47994H16.3122C15.3527 9.47994 14.5615 10.2711 14.5615 11.2307C14.5615 12.2071 15.3527 12.9814 16.3122 12.9814H20.4703V9.4631V9.47994Z"
                stroke="#7D7D7D"
                strokeWidth="0.942709"
                strokeMiterlimit="22.9256"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1776 10.8098C16.4132 10.8098 16.5984 10.995 16.5984 11.2307C16.5984 11.4664 16.4132 11.6515 16.1776 11.6515C15.9419 11.6515 15.7567 11.4664 15.7567 11.2307C15.7567 10.995 15.9419 10.8098 16.1776 10.8098Z"
                fill="#7D7D7D"
                stroke="#7D7D7D"
                strokeWidth="0.942709"
                strokeMiterlimit="22.9256"
              />
              <path
                d="M5.16807 4.49705L12.8781 0.608378C13.5346 0.271696 14.3258 0.557876 14.6457 1.24807L16.1607 4.49705"
                stroke="#7D7D7D"
                strokeWidth="0.942709"
                strokeMiterlimit="22.9256"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_83">
                <rect width="20.9416" height="18.438" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 6:
        return (
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_90)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5147 0.471069C12.8699 0.471069 14.771 2.37211 14.771 4.72738C14.771 7.08266 12.8699 8.9837 10.5147 8.9837C8.15938 8.9837 6.25834 7.08266 6.25834 4.72738C6.25834 2.37211 8.15938 0.471069 10.5147 0.471069V0.471069Z"
                stroke="#7A7B7B"
                strokeWidth="0.942109"
                strokeMiterlimit="22.9256"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.481 17.9674H0.471096C0.471096 11.2885 5.88822 9.89215 10.481 9.89215C16.0159 9.89215 20.4909 11.7932 20.4909 17.9674H10.481V17.9674Z"
                stroke="#7A7B7B"
                strokeWidth="0.942109"
                strokeMiterlimit="22.9256"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_90">
                <rect width="20.962" height="18.4384" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case 7:
        return (
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1495 14.4797H10.5473V14.9448H10.1495V14.4797ZM7.80284 7.83818C7.88082 7.16661 8.12105 6.63242 8.50204 6.21781C8.96039 5.71901 9.60615 5.45328 10.4915 5.45328C11.3154 5.45328 11.9258 5.68991 12.3721 6.1092C12.82 6.52991 13.0565 7.085 13.0565 7.76561C13.0565 8.20901 12.9672 8.50588 12.8373 8.70077C12.6666 8.95682 12.2787 9.39717 11.6763 9.98288C11.2055 10.4364 10.865 10.86 10.6914 11.2506C10.5641 11.5371 10.4932 11.8953 10.4634 12.3009H10.2015C10.2319 11.9079 10.2983 11.5965 10.3871 11.3598C10.5001 11.0585 10.7908 10.6494 11.314 10.1258L11.8775 9.57889C12.0783 9.39675 12.245 9.19023 12.3727 8.95902C12.5934 8.5944 12.7261 8.18902 12.7261 7.76561C12.7261 7.20767 12.5586 6.68718 12.1907 6.25163C11.7873 5.7521 11.1544 5.56474 10.441 5.56474C9.98672 5.56474 9.56777 5.64678 9.20528 5.84067C8.83793 6.03716 8.55815 6.33293 8.36392 6.70968C8.20308 7.01618 8.10279 7.39996 8.05412 7.83818H7.80284Z"
              fill="white"
              stroke="#7D7D7D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4747 0.473755C15.9983 0.473755 20.4778 4.8354 20.4778 10.2075C20.4778 15.5795 15.9983 19.9412 10.4747 19.9412C4.95106 19.9412 0.471529 15.5795 0.471529 10.2075C0.471529 4.8354 4.95106 0.473755 10.4747 0.473755V0.473755Z"
              stroke="#7D7D7D"
              strokeWidth="0.943059"
              strokeMiterlimit="22.9256"
            />
          </svg>
        );
      case 8:
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.482 16.7088V13.0178V9.69794C7.482 9.15115 7.482 9.15115 6.99377 9.15115H5.97827C5.47052 9.15115 5.47052 9.15116 5.47052 9.69794V16.7088C5.47052 17.2165 5.47053 17.2165 5.97827 17.2165H6.99377C7.482 17.2165 7.482 17.2165 7.482 16.7088Z"
              stroke="#7D7D7D"
            />
            <path
              d="M5.4695 9.73749C2.61069 9.73749 1.48068 10.3719 1.48068 13.3852C1.48068 16.1211 2.3728 16.7356 5.4695 16.7356"
              stroke="#7D7D7D"
            />
            <path
              d="M17.4276 16.7745V13.0836V9.76367C17.4276 9.21689 17.4276 9.21689 16.9393 9.21689H15.9238C15.4161 9.21689 15.4161 9.21689 15.4161 9.76367V16.7745C15.4161 17.2823 15.4161 17.2823 15.9238 17.2823H16.9393C17.4276 17.2823 17.4276 17.2823 17.4276 16.7745Z"
              stroke="#7D7D7D"
            />
            <path
              d="M17.4717 16.6898C20.3305 16.6898 21.4605 16.0554 21.4605 13.042C21.4605 10.3062 20.5684 9.69164 17.4717 9.69164"
              stroke="#7D7D7D"
            />
            <path
              d="M19.453 16.5489V18.2649C19.453 20.0137 18.5652 20.1842 17.2438 20.1842H10.961M10.961 20.1842C10.961 19.5474 10.6587 19.2145 10.1967 19.2106C9.73148 19.2066 9.45826 19.5085 9.45826 20.1842C9.45826 20.8598 9.72074 21.1578 10.1967 21.1537C10.6695 21.1497 10.961 20.9335 10.961 20.1842ZM3.97894 9.72922V6.21852C3.97894 4.49342 6.27906 1.40643 11.303 1.40643C16.3269 1.40643 18.8994 4.31183 18.8994 6.21852V9.72922"
              stroke="#7D7D7D"
            />
          </svg>
        );
      case 9:
        return (
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_110)">
              <path
                d="M13.5623 18.0474H0.473715V0.47226C4.8422 0.47226 9.19382 0.47226 13.5623 0.47226"
                stroke="#7A7B7B"
                strokeWidth="0.944538"
                strokeMiterlimit="22.9256"
              />
              <path
                d="M6.98428 9.25983H20.2921"
                stroke="#7A7B7B"
                strokeWidth="0.944538"
                strokeMiterlimit="22.9256"
              />
              <path
                d="M15.2321 4.18295L20.2415 9.25984L15.2827 14.303"
                stroke="#7A7B7B"
                strokeWidth="0.944538"
                strokeMiterlimit="22.9256"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_110">
                <rect width="20.9008" height="18.5197" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      default:
        return <svg></svg>;
    }
  }

  render() {
    return (
      <nav className={"d-flex flex-column align-items-start align-items-sm-start min-vh-100 "+styles.menu}>
        <div className={"pt-4 px-1 ps-lg-4 mb-4 "+styles.logo}>
          <img src={worklogo} alt="WORK 5"/>
        </div>
        <ul className="nav nav-pills flex-column align-items-start">
          {this.props.menu.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              iconSelector={this.iconSelector}
            />
          ))}
        </ul>
      </nav>
    );
  }
}
