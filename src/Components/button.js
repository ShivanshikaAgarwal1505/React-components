// import React from "react";
import "./button.css";

const Button = () => {
  return (
    <button class="Btn">
      <div class="sign">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Help">
          <path
            fill="#f0efed"
            d="M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M8,3 C5.23857625,3 3,5.23857625 3,8 C3,10.7614237 5.23857625,13 8,13 C10.7614237,13 13,10.7614237 13,8 C13,5.23857625 10.7614237,3 8,3 Z M8,10.5 C8.41421356,10.5 8.75,10.8357864 8.75,11.25 C8.75,11.6642136 8.41421356,12 8,12 C7.58578644,12 7.25,11.6642136 7.25,11.25 C7.25,10.8357864 7.58578644,10.5 8,10.5 Z M8,4.5 C9.1045695,4.5 10,5.3954305 10,6.5 C10,7.23053233 9.7882219,7.63969063 9.24604859,8.20790744 L8.98196082,8.47745399 C8.60450815,8.87101977 8.5,9.08310002 8.5,9.5 C8.5,9.77614237 8.27614237,10 8,10 C7.72385763,10 7.5,9.77614237 7.5,9.5 C7.5,8.76946767 7.7117781,8.36030937 8.25395141,7.79209256 L8.51803918,7.52254601 C8.89549185,7.12898023 9,6.91689998 9,6.5 C9,5.94771525 8.55228475,5.5 8,5.5 C7.44771525,5.5 7,5.94771525 7,6.5 C7,6.77614237 6.77614237,7 6.5,7 C6.22385763,7 6,6.77614237 6,6.5 C6,5.3954305 6.8954305,4.5 8,4.5 Z"
            class="color212121 svgShape"
          >
          </path>
        </svg>
      </div>

      <div class="text">Help</div>
    </button>
  );
};

export default Button;