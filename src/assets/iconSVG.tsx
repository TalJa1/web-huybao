import React from "react";
import { IconSVGProps } from "../services/typeProps";

export const messageIcon: React.FC<IconSVGProps> = ({
  width,
  height,
  color,
}) => {
  width = width ?? 40;
  height = height ?? 40;
  color = color ?? "white";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3333 3.33334H16.6667C15.3406 3.33334 14.0688 3.86013 13.1311 4.79781C12.1935 5.73549 11.6667 7.00726 11.6667 8.33334V11.6667H6.66667C5.34059 11.6667 4.06882 12.1935 3.13114 13.1311C2.19346 14.0688 1.66667 15.3406 1.66667 16.6667V26.6667C1.66613 27.7011 1.98643 28.7102 2.58343 29.555C3.18043 30.3997 4.02474 31.0385 5.00001 31.3833V35C5.00051 35.2953 5.07949 35.5852 5.22884 35.84C5.37819 36.0948 5.59256 36.3053 5.85001 36.45C6.0991 36.5912 6.38036 36.6658 6.66667 36.6667C6.96581 36.6666 7.25941 36.586 7.51667 36.4333L15.4667 31.6667H23.3333C24.6594 31.6667 25.9312 31.1399 26.8689 30.2022C27.8066 29.2645 28.3333 27.9928 28.3333 26.6667V25.6167L32.4833 28.1C32.7406 28.2527 33.0342 28.3333 33.3333 28.3333C33.6196 28.3325 33.9009 28.2579 34.15 28.1167C34.4074 27.972 34.6218 27.7614 34.7712 27.5067C34.9205 27.2519 34.9995 26.962 35 26.6667V23.05C35.9753 22.7052 36.8196 22.0664 37.4166 21.2216C38.0136 20.3769 38.3339 19.3678 38.3333 18.3333V8.33334C38.3333 7.00726 37.8066 5.73549 36.8689 4.79781C35.9312 3.86013 34.6594 3.33334 33.3333 3.33334ZM25 26.6667C25 27.1087 24.8244 27.5326 24.5118 27.8452C24.1993 28.1578 23.7754 28.3333 23.3333 28.3333H15C14.7009 28.3334 14.4073 28.414 14.15 28.5667L8.33334 32.05V30C8.33334 29.558 8.15774 29.1341 7.84518 28.8215C7.53262 28.5089 7.1087 28.3333 6.66667 28.3333C6.22464 28.3333 5.80072 28.1578 5.48816 27.8452C5.1756 27.5326 5.00001 27.1087 5.00001 26.6667V16.6667C5.00001 16.2247 5.1756 15.8007 5.48816 15.4882C5.80072 15.1756 6.22464 15 6.66667 15H11.6667V18.3333C11.6667 19.6594 12.1935 20.9312 13.1311 21.8689C14.0688 22.8066 15.3406 23.3333 16.6667 23.3333H24.5333L25 23.6167V26.6667ZM35 18.3333C35 18.7754 34.8244 19.1993 34.5118 19.5119C34.1993 19.8244 33.7754 20 33.3333 20C32.8913 20 32.4674 20.1756 32.1548 20.4882C31.8423 20.8007 31.6667 21.2246 31.6667 21.6667V23.7167L25.85 20.2333C25.5927 20.0807 25.2991 20.0001 25 20H16.6667C16.2246 20 15.8007 19.8244 15.4882 19.5119C15.1756 19.1993 15 18.7754 15 18.3333V8.33334C15 7.89132 15.1756 7.46739 15.4882 7.15483C15.8007 6.84227 16.2246 6.66668 16.6667 6.66668H33.3333C33.7754 6.66668 34.1993 6.84227 34.5118 7.15483C34.8244 7.46739 35 7.89132 35 8.33334V18.3333Z"
        fill={color}
      />
    </svg>
  );
};

export const userIcon: React.FC<IconSVGProps> = ({ width, height, color }) => {
  width = width ?? 40;
  height = height ?? 40;
  color = color ?? "white";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.1758 10.875C26.1758 11.2187 26.1524 11.5625 26.1094 11.9023C26.1289 11.7656 26.1485 11.625 26.1641 11.4883C26.0703 12.168 25.8906 12.8281 25.6289 13.4609C25.6797 13.3359 25.7344 13.2109 25.7852 13.0859C25.5235 13.7031 25.1875 14.2812 24.7774 14.8125C24.8594 14.707 24.9414 14.6016 25.0235 14.4961C24.6172 15.0195 24.1446 15.4922 23.6211 15.8984C23.7266 15.8164 23.832 15.7344 23.9375 15.6523C23.4063 16.0586 22.8281 16.3984 22.211 16.6601C22.336 16.6094 22.461 16.5547 22.586 16.5039C21.9531 16.7656 21.293 16.9453 20.6133 17.0391C20.75 17.0195 20.8906 17 21.0274 16.9844C20.3438 17.0742 19.6563 17.0742 18.9727 16.9844C19.1094 17.0039 19.25 17.0234 19.3867 17.0391C18.707 16.9453 18.0469 16.7656 17.4141 16.5039C17.5391 16.5547 17.6641 16.6094 17.7891 16.6601C17.1719 16.3984 16.5938 16.0625 16.0625 15.6523C16.168 15.7344 16.2734 15.8164 16.3789 15.8984C15.8555 15.4922 15.3828 15.0195 14.9766 14.4961C15.0586 14.6016 15.1406 14.707 15.2227 14.8125C14.8164 14.2812 14.4766 13.7031 14.2149 13.0859C14.2656 13.2109 14.3203 13.3359 14.3711 13.4609C14.1094 12.8281 13.9297 12.168 13.8359 11.4883C13.8555 11.625 13.875 11.7656 13.8906 11.9023C13.8008 11.2187 13.8008 10.5312 13.8906 9.84765C13.8711 9.98437 13.8516 10.125 13.8359 10.2617C13.9297 9.58202 14.1094 8.92187 14.3711 8.28905C14.3203 8.41405 14.2656 8.53905 14.2149 8.66405C14.4766 8.04687 14.8125 7.46874 15.2227 6.93749C15.1406 7.04296 15.0586 7.14843 14.9766 7.2539C15.3828 6.73046 15.8555 6.2578 16.3789 5.85155C16.2734 5.93359 16.168 6.01562 16.0625 6.09765C16.5938 5.6914 17.1719 5.35155 17.7891 5.08984C17.6641 5.14062 17.5391 5.1953 17.4141 5.24609C18.0469 4.98437 18.707 4.80468 19.3867 4.71093C19.25 4.73046 19.1094 4.74999 18.9727 4.76562C19.6563 4.67577 20.3438 4.67577 21.0274 4.76562C20.8906 4.74609 20.75 4.72655 20.6133 4.71093C21.293 4.80468 21.9531 4.98437 22.586 5.24609C22.461 5.1953 22.336 5.14062 22.211 5.08984C22.8281 5.35155 23.4063 5.68749 23.9375 6.09765C23.832 6.01562 23.7266 5.93359 23.6211 5.85155C24.1446 6.2578 24.6172 6.73046 25.0235 7.2539C24.9414 7.14843 24.8594 7.04296 24.7774 6.93749C25.1836 7.46874 25.5235 8.04687 25.7852 8.66405C25.7344 8.53905 25.6797 8.41405 25.6289 8.28905C25.8906 8.92187 26.0703 9.58202 26.1641 10.2617C26.1445 10.125 26.125 9.98437 26.1094 9.84765C26.1524 10.1875 26.1719 10.5312 26.1758 10.875C26.1797 11.6914 26.8906 12.4766 27.7383 12.4375C28.5821 12.3984 29.3047 11.75 29.3008 10.875C29.293 9.0039 28.7305 7.08984 27.6289 5.5664C27.3321 5.15624 27.0156 4.7539 26.6641 4.39062C26.3086 4.02343 25.918 3.70702 25.5117 3.39843C24.7735 2.83593 23.9492 2.42187 23.0742 2.10155C19.5469 0.808586 15.293 1.96093 12.9063 4.86718C12.5781 5.26562 12.2656 5.67968 12 6.12499C11.7344 6.5664 11.5273 7.03515 11.3359 7.51171C10.9766 8.39452 10.793 9.33202 10.7188 10.2812C10.5742 12.1406 11.0586 14.082 12.0273 15.6758C12.9609 17.2148 14.3711 18.5351 16.0195 19.2812C16.5039 19.5 17 19.7031 17.5156 19.8476C18.0274 19.9883 18.5469 20.0664 19.0742 20.1289C20.0352 20.2422 21.0156 20.1641 21.9649 19.9726C25.5703 19.2383 28.5899 16.1328 29.1485 12.4883C29.2305 11.957 29.293 11.4258 29.293 10.8867C29.2969 10.0703 28.5703 9.28515 27.7305 9.32421C26.8867 9.35155 26.1758 9.99999 26.1758 10.875ZM31.3594 35.3008C30.5938 35.3008 29.8281 35.3008 29.0625 35.3008C27.2383 35.3008 25.418 35.3008 23.5938 35.3008C21.3985 35.3008 19.2031 35.3008 17.0039 35.3008C15.1094 35.3008 13.2149 35.3008 11.3164 35.3008C10.4297 35.3008 9.54297 35.3086 8.65625 35.3008C8.5586 35.3008 8.46094 35.293 8.36719 35.2812C8.50391 35.3008 8.64453 35.3203 8.78125 35.3359C8.625 35.3125 8.47657 35.2695 8.33203 35.2109C8.45703 35.2617 8.58203 35.3164 8.70703 35.3672C8.55078 35.3008 8.40625 35.2148 8.26953 35.1094C8.375 35.1914 8.48047 35.2734 8.58594 35.3555C8.46875 35.2578 8.35938 35.1523 8.26563 35.0351C8.34766 35.1406 8.42969 35.2461 8.51172 35.3516C8.40625 35.2148 8.32422 35.0703 8.25391 34.9141C8.30469 35.0391 8.35938 35.1641 8.41016 35.2891C8.35157 35.1445 8.3125 34.9922 8.28516 34.8398C8.30469 34.9766 8.32422 35.1172 8.33985 35.2539C8.27735 34.7812 8.32031 34.2812 8.32031 33.8047C8.32031 33.2461 8.32031 32.6914 8.32031 32.1328C8.32031 31.7148 8.34375 31.3008 8.39844 30.8867C8.37891 31.0234 8.35938 31.1641 8.34375 31.3008C8.45313 30.5 8.66407 29.7148 8.98047 28.9687C8.92969 29.0937 8.875 29.2187 8.82422 29.3437C9.12891 28.6328 9.51954 27.9648 9.99219 27.3516C9.91016 27.457 9.82813 27.5625 9.7461 27.668C10.2188 27.0625 10.7617 26.5156 11.3711 26.043C11.2656 26.125 11.1602 26.207 11.0547 26.2891C11.668 25.8164 12.3359 25.4258 13.0469 25.1211C12.9219 25.1719 12.7969 25.2266 12.6719 25.2773C13.418 24.9648 14.1992 24.75 15.0039 24.6406C14.8672 24.6601 14.7266 24.6797 14.5899 24.6953C15.168 24.6211 15.7422 24.6172 16.3242 24.6172C17.0391 24.6172 17.7539 24.6172 18.4688 24.6172C20.1367 24.6172 21.8047 24.6172 23.4727 24.6172C24.1172 24.6172 24.7578 24.6133 25.4024 24.6953C25.2656 24.6758 25.125 24.6562 24.9883 24.6406C25.7891 24.75 26.5742 24.9609 27.3203 25.2773C27.1953 25.2266 27.0703 25.1719 26.9453 25.1211C27.6563 25.4258 28.3242 25.8164 28.9375 26.2891C28.8321 26.207 28.7266 26.125 28.6211 26.043C29.2266 26.5156 29.7735 27.0586 30.2461 27.668C30.1641 27.5625 30.0821 27.457 30 27.3516C30.4727 27.9648 30.8633 28.6328 31.168 29.3437C31.1172 29.2187 31.0625 29.0937 31.0117 28.9687C31.3242 29.7148 31.5391 30.4961 31.6485 31.3008C31.6289 31.1641 31.6094 31.0234 31.5938 30.8867C31.668 31.4766 31.6719 32.0625 31.6719 32.6562C31.6719 33.3008 31.6719 33.9453 31.6719 34.5898C31.6719 34.8125 31.6797 35.0351 31.6524 35.2539C31.6719 35.1172 31.6914 34.9766 31.7071 34.8398C31.6836 34.9961 31.6406 35.1445 31.5821 35.2891C31.6328 35.1641 31.6875 35.0391 31.7383 34.9141C31.6719 35.0703 31.586 35.2148 31.4805 35.3516C31.5625 35.2461 31.6446 35.1406 31.7266 35.0351C31.6289 35.1523 31.5235 35.2617 31.4063 35.3555C31.5117 35.2734 31.6172 35.1914 31.7227 35.1094C31.586 35.2148 31.4414 35.2969 31.2852 35.3672C31.4102 35.3164 31.5352 35.2617 31.6602 35.2109C31.5156 35.2695 31.3633 35.3086 31.211 35.3359C31.3477 35.3164 31.4883 35.2969 31.625 35.2812C31.5391 35.293 31.4492 35.2969 31.3594 35.3008C30.9571 35.3047 30.543 35.4726 30.2539 35.7578C29.9844 36.0273 29.7774 36.4726 29.7969 36.8633C29.836 37.6992 30.4844 38.4375 31.3594 38.4258C32.8789 38.4023 34.2149 37.4101 34.6602 35.9531C34.836 35.375 34.7969 34.7539 34.7969 34.1601C34.7969 32.8008 34.8399 31.4531 34.6055 30.1055C34.2617 28.1328 33.2696 26.2773 31.9102 24.8203C30.5508 23.3633 28.7227 22.293 26.7891 21.8164C25.6797 21.543 24.5625 21.5 23.4297 21.5C22.2656 21.5 21.1055 21.5 19.9414 21.5C18.793 21.5 17.6484 21.5 16.5 21.5C15.3399 21.5 14.1875 21.5547 13.0586 21.8555C11.1406 22.3633 9.33594 23.4453 8.00391 24.9141C6.66016 26.3945 5.6875 28.2539 5.37109 30.2383C5.16016 31.5703 5.20312 32.9062 5.20312 34.25C5.20312 34.8672 5.16797 35.5117 5.39062 36.1016C5.67969 36.8594 6.14063 37.457 6.81641 37.9062C7.34375 38.2539 8.01172 38.4219 8.63672 38.4297C8.94141 38.4336 9.2461 38.4297 9.55079 38.4297C10.332 38.4297 11.1094 38.4297 11.8906 38.4297C13 38.4297 14.1055 38.4297 15.2149 38.4297C16.5039 38.4297 17.793 38.4297 19.082 38.4297C20.4063 38.4297 21.7266 38.4297 23.0508 38.4297C24.2617 38.4297 25.4688 38.4297 26.6797 38.4297C27.6289 38.4297 28.5781 38.4297 29.5235 38.4297C30.0664 38.4297 30.6094 38.4297 31.1524 38.4297C31.2227 38.4297 31.293 38.4297 31.3633 38.4297C32.1797 38.4297 32.9649 37.7109 32.9258 36.8672C32.8867 36.0156 32.2383 35.3008 31.3594 35.3008Z"
        fill={color}
      />
    </svg>
  );
};

export const mealIcon: React.FC<IconSVGProps> = ({ width, height, color }) => {
  width = width ?? 40;
  height = height ?? 40;
  color = color ?? "white";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2545 3.50918C11.9688 4.64227 10.0464 6.39316 8.70525 8.56328C7.36409 10.7334 6.65786 13.2359 6.66666 15.787V21.7167C6.66772 22.5871 7.01398 23.4217 7.6295 24.0372C8.24501 24.6527 9.07953 24.999 9.94999 25H13.3333V35C13.3333 35.442 13.5089 35.866 13.8215 36.1785C14.134 36.4911 14.558 36.6667 15 36.6667C15.442 36.6667 15.8659 36.4911 16.1785 36.1785C16.4911 35.866 16.6667 35.442 16.6667 35V5.00001C16.6664 4.71599 16.5936 4.43674 16.4552 4.18872C16.3168 3.94071 16.1174 3.73216 15.8758 3.58284C15.6342 3.43352 15.3584 3.34838 15.0747 3.33549C14.791 3.32259 14.5086 3.38238 14.2545 3.50918ZM13.3333 21.6833L9.99999 21.7167V15.787C9.99499 14.3525 10.2888 12.9327 10.8627 11.6181C11.4366 10.3034 12.278 9.12262 13.3333 8.15101V21.6833ZM30 5.00001V11.6667C29.9994 12.1085 29.8236 12.5321 29.5112 12.8446C29.1988 13.157 28.7752 13.3328 28.3333 13.3333V5.00001C28.3333 4.55798 28.1577 4.13406 27.8452 3.8215C27.5326 3.50894 27.1087 3.33334 26.6667 3.33334C26.2246 3.33334 25.8007 3.50894 25.4881 3.8215C25.1756 4.13406 25 4.55798 25 5.00001V13.3333C24.5581 13.3328 24.1346 13.157 23.8221 12.8446C23.5097 12.5321 23.3339 12.1085 23.3333 11.6667V5.00001C23.3333 4.55798 23.1577 4.13406 22.8452 3.8215C22.5326 3.50894 22.1087 3.33334 21.6667 3.33334C21.2246 3.33334 20.8007 3.50894 20.4881 3.8215C20.1756 4.13406 20 4.55798 20 5.00001V11.6667C20.0015 12.9923 20.5287 14.2632 21.4661 15.2006C22.4034 16.138 23.6744 16.6652 25 16.6667V35C25 35.442 25.1756 35.866 25.4881 36.1785C25.8007 36.4911 26.2246 36.6667 26.6667 36.6667C27.1087 36.6667 27.5326 36.4911 27.8452 36.1785C28.1577 35.866 28.3333 35.442 28.3333 35V16.6667C29.659 16.6652 30.9299 16.138 31.8673 15.2006C32.8046 14.2632 33.3319 12.9923 33.3333 11.6667V5.00001C33.3333 4.55798 33.1577 4.13406 32.8452 3.8215C32.5326 3.50894 32.1087 3.33334 31.6667 3.33334C31.2246 3.33334 30.8007 3.50894 30.4881 3.8215C30.1756 4.13406 30 4.55798 30 5.00001Z"
        fill={color}
      />
    </svg>
  );
};

export const financeIcon: React.FC<IconSVGProps> = ({
  width,
  height,
  color,
}) => {
  width = width ?? 40;
  height = height ?? 40;
  color = color ?? "white";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.2361 21.8435C33.9952 21.0315 31.5092 21.212 29.4073 22.3374L25.9808 23.8788C25.7039 22.3007 24.4919 21.1148 22.9959 21.0692C22.9871 21.069 17.8583 21.0111 17.8583 21.0111C13.7532 19.885 11.0858 21.332 9.56418 22.7579C9.25298 23.0496 8.97931 23.3498 8.73845 23.646C8.32785 23.2038 7.60307 23.0856 7.07452 23.3762L2.41888 25.9354C1.81503 26.2674 1.5523 26.9956 1.80555 27.6358L6.35546 39.1377C6.65444 39.8934 7.57324 40.2274 8.29016 39.8333L12.9458 37.2742C13.3822 37.0343 13.6391 36.5873 13.6532 36.1162H20.6018C21.7352 36.1162 22.8542 35.8185 23.8378 35.2553C23.8378 35.2553 36.9061 27.7589 36.9799 27.6919C38.81 26.027 38.8664 22.7966 36.2361 21.8435C37.2854 22.2237 33.9952 21.0315 36.2361 21.8435ZM8.33179 36.688L4.7964 27.7508L7.03264 26.5216L10.568 35.4588L8.33179 36.688ZM35.2312 25.5773L22.4744 32.8826C21.905 33.2087 21.2574 33.381 20.6015 33.381H12.6915L10.0356 26.667C10.2632 26.2034 10.7113 25.4342 11.4391 24.7522C12.9296 23.3555 14.8942 22.998 17.2787 23.6898C17.3979 23.7244 17.5214 23.7427 17.6455 23.7441L22.9176 23.8034C23.0522 23.815 23.3007 24.1143 23.3007 24.5679C23.3007 25.035 23.0441 25.3327 22.9099 25.3327H17.7298V28.0679H22.9099C23.5516 28.0679 24.1488 27.8509 24.6459 27.4791L30.5775 24.8109C30.609 24.7968 30.6397 24.7815 30.67 24.765C32.0929 23.9914 33.7811 23.8636 35.3014 24.4145C35.9031 24.6327 35.4685 25.3364 35.2312 25.5773ZM26.9996 19.7079C21.5665 19.7079 17.1463 15.2874 17.1463 9.85393C17.1463 4.42051 21.5664 0 26.9996 0C32.4327 0 36.8528 4.42051 36.8528 9.85393C36.8528 15.2874 32.4326 19.7079 26.9996 19.7079ZM26.9996 2.73521C23.0771 2.73521 19.886 5.92863 19.886 9.85393C19.886 13.7792 23.0772 16.9727 26.9996 16.9727C30.9221 16.9727 34.1132 13.7791 34.1132 9.85393C34.1132 5.92872 30.922 2.73521 26.9996 2.73521Z"
        fill={color}
      />
      <path
        d="M27.6358 8.73923C26.5465 8.29188 26.4622 8.09966 26.4622 7.87684C26.4622 7.73453 26.5329 7.40368 27.1872 7.40368C27.7857 7.40368 28.5315 7.73966 29.0575 8.0859L29.7892 6.16795C29.2668 5.83539 28.632 5.54966 28.0384 5.45829V4.21103H26.0874V5.57966C24.9285 5.94496 24.2143 6.87146 24.2143 8.02479C24.2143 9.55231 25.4363 10.2343 26.63 10.6991C27.5837 11.0828 27.6636 11.3765 27.6636 11.6217C27.6636 11.9989 27.316 12.2426 26.778 12.2426C26.0766 12.2426 25.2609 11.838 24.6899 11.3952L23.9859 13.3439C24.5681 13.7954 25.2421 14.0933 26.0005 14.2045V15.4969H27.9636V14.0901C29.1588 13.7095 29.9238 12.7193 29.9238 11.5354C29.9238 9.87812 28.7011 9.1706 27.6358 8.73923Z"
        fill={color}
      />
    </svg>
  );
};

export const teacherIcon: React.FC<IconSVGProps> = ({
  width,
  height,
  color,
}) => {
  width = width ?? 40;
  height = height ?? 40;
  color = color ?? "white";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_99)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 35C5 37.0713 6.67875 38.75 8.75 38.75H31.25C33.3212 38.75 35 37.0713 35 35C35 32.0825 35 27.3125 35 24.5863C35 22.7738 33.7038 21.2213 31.9213 20.8975C29.2788 20.4163 24.7225 19.5875 22.145 19.12C20.7263 18.8612 19.2737 18.8612 17.855 19.12C15.2775 19.5875 10.7212 20.4163 8.07875 20.8975C6.29625 21.2213 5 22.7738 5 24.5863V35ZM22.885 21.795L24.7612 28.9288C25.0075 29.865 24.6775 30.8588 23.92 31.4638C23.28 31.9738 22.2713 32.7788 21.5713 33.3388C20.6525 34.0713 19.3475 34.0713 18.4287 33.3388C17.7287 32.7788 16.72 31.9738 16.08 31.4638C15.3225 30.8588 14.9925 29.865 15.2388 28.9288L17.115 21.795L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25C13.98 36.25 26.02 36.25 31.25 36.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L22.885 21.795ZM20.2038 21.4288C20.0675 21.425 19.9325 21.425 19.7962 21.4288L17.6663 29.5312L19.9887 31.3837C19.995 31.39 20.005 31.39 20.0113 31.3837L22.3337 29.5312L20.2038 21.4288ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_99">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const studentSVG: React.FC<IconSVGProps> = ({
  width,
  height,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.3542 35.6252H10.6458C8.17206 35.6252 6.16667 33.6198 6.16667 31.146C6.16667 23.8347 16.9167 23.9794 20.5 23.9794C24.0833 23.9794 34.8333 23.8347 34.8333 31.146C34.8333 33.6198 32.8279 35.6252 30.3542 35.6252Z"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 17.7083C24.458 17.7083 27.6667 14.4997 27.6667 10.5417C27.6667 6.58363 24.458 3.375 20.5 3.375C16.542 3.375 13.3333 6.58363 13.3333 10.5417C13.3333 14.4997 16.542 17.7083 20.5 17.7083Z"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const homeSVG: React.FC<IconSVGProps> = ({
  width,
  height,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3.33333L3.33333 20H10V36.6667H16.6667V26.6667H23.3333V36.6667H30V20H36.6667L20 3.33333Z"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export {};
