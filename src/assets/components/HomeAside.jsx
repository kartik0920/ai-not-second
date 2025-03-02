import React from 'react'

export default function HomeAside() {
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
              {[...Array(2)].map((_, index) => (
                <div className={`heart${index + 1}`} key={index}>
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
                      fill="#6A5AE0"
                    />
                  </svg>
                </div>
              ))}
              <div className="heart3">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.88659 16.6603L8.88587 16.6596C6.30104 14.3157 4.19578 12.4033 2.73088 10.6111C1.27148 8.82559 0.5 7.22062 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08885 0.5 8.62206 1.24223 9.62058 2.40564L10 2.84771L10.3794 2.40564C11.3779 1.24223 12.9112 0.5 14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22062 18.7285 8.82559 17.2691 10.6111C15.8042 12.4033 13.699 14.3157 11.1141 16.6596L11.1134 16.6603L10 17.6738L8.88659 16.6603Z"
                    fill="#D5CFFF"
                    stroke="#C5BDFF"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="circle_div">
            <div className="score">
              <div className="score_data">
                <h1>13</h1>
                <h2>/20</h2>
              </div>
              <p>Correct</p>
            </div>
            <svg
              style={{ position: "absolute", top: 0, left: 0 }}
              width="140"
              height="140"
              viewBox="0 0 148 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="74" cy="74" r="69" stroke="white" strokeWidth="10" />
            </svg>

            <svg
              style={{ position: "absolute", top: 0, left: 0 }}
              width="140"
              height="140"
              viewBox="0 0 148 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M74 5.18C74 2.31917 76.3221 -0.0188775 79.176 0.181201..."
                stroke="#6A5AE0"
                strokeWidth="20"
              />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  )
}
