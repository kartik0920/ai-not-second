import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HeartOn from "./HeartOn";
import HeartOff from "./HeartOff";

export default function HomeAside({ count, total, wrong }) {
  return (
    <aside className="sidebar">
      <div className="progress">
        <div className="line">
          <svg
            style={{ position: "absolute", top: 0, left: 0 }}
            width="218"
            height="48"
            viewBox="0 0 218 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-162.685 47.4117C-162.685 47.4117 -145.03 14.3953 -110.48 7.29406C-52.812 -4.55888 22.9287 33.5572 97.7324 24.6176C158.18 17.3937 217.318 -17.6275 217.318 -17.6275"
              stroke="#D9D4F7"
              strokeWidth="2"
            />
          </svg>

          <svg
            style={{ position: "absolute", top: 0, left: 0 }}
            width="263"
            height="59"
            viewBox="0 0 263 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-191.823 58.3529C-191.823 58.3529 -170.726 18.8566 -129.444 10.3617C-60.5366 -3.81749 29.9651 41.7793 119.347 31.0852C191.575 22.4435 262.239 -19.451 262.239 -19.451"
              stroke="#D9D4F7"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="level_div">
          <h3 className="level">Level 1</h3>
          <div className="hearts">
            <div className="heartsEmoji">
              {[...Array(wrong)].map(() => (
                <HeartOn />
              ))}
              {[...Array(3 - wrong)].map(() => (
                <HeartOff />
              ))}
            </div>
          </div>

          <div className="circle_div">
            <CircularProgressbar
              value={(count / total) * 100}
              text={`${count} / ${total} `}
              styles={buildStyles({
                pathTransitionDuration: 0.5,

                pathColor: `rgba(106, 90, 224,75), ${count / total})`,
                textColor: "#6a5ae0",

                backgroundColor: "#E8E5FA",
              })}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
