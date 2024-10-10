import { useState, useEffect } from "react";

const useCountdown = (tempoEmSegundos: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(tempoEmSegundos);

  useEffect(() => {
    setTimeLeft(12 * 60 * 60);
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return [hours, minutes, seconds];
};

export default useCountdown;
