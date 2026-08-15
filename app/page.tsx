"use client";

import { CSSProperties, useState } from "react";

const hearts = Array.from({ length: 46 }, (_, index) => ({
  id: index,
  x: (index * 37) % 100,
  size: 16 + ((index * 13) % 30),
  delay: (index * 0.067) % 0.9,
  duration: 2.5 + ((index * 17) % 13) / 10,
  drift: -90 + ((index * 29) % 180),
  spin: -40 + ((index * 23) % 80),
}));

type HeartStyle = CSSProperties & {
  "--x": string;
  "--size": string;
  "--delay": string;
  "--duration": string;
  "--drift": string;
  "--spin": string;
};

export default function Home() {
  const [heartBurst, setHeartBurst] = useState(0);

  const replayHearts = () => setHeartBurst((burst) => burst + 1);

  return (
    <main className="page-shell">
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />

      <div className="heart-burst" key={heartBurst} aria-hidden="true">
        {hearts.map((heart) => (
          <span
            className="flying-heart"
            key={heart.id}
            style={
              {
                "--x": `${heart.x}vw`,
                "--size": `${heart.size}px`,
                "--delay": `${heart.delay}s`,
                "--duration": `${heart.duration}s`,
                "--drift": `${heart.drift}px`,
                "--spin": `${heart.spin}deg`,
              } as HeartStyle
            }
          >
            ♥
          </span>
        ))}
      </div>

      <section className="apology-card" aria-labelledby="apology-title">
        <div className="mini-heart" aria-hidden="true">
          ♥
        </div>
        <p className="eyebrow">моей любимой сестре</p>
        <h1 id="apology-title">Извини</h1>
        <p className="message">
          Я неудачно пошутил и совсем не хотел тебя обидеть.
          <br />
          Ты мне очень дорога.
        </p>
        <div className="signature">
          <span className="signature-line" />
          <span>Обнимаю</span>
          <span className="signature-line" />
        </div>
        <button className="heart-button" type="button" onClick={replayHearts}>
          <span aria-hidden="true">♥</span>
          Ещё немного любви
        </button>
      </section>

      <p className="footer-note">Я правда больше так не буду</p>
    </main>
  );
}
