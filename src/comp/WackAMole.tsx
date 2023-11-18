import { useEffect, useState } from "react";
import { styled } from "styled-components";
import hole from "assets/hole.png";
import mole from "assets/mole.png";

export default function WackAMole() {
  const [moles, setMoles] = useState<boolean[]>(new Array(9).fill(false));
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      showMole(randomIndex);

      setTimeout(() => {
        hideMole(randomIndex);
      }, 800);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [moles]);

  const showMole = (randomIndex: number) => {
    setMoles((currentMoles) => {
      const newMoles = [...currentMoles];
      newMoles[randomIndex] = true;
      return newMoles;
    });
  };

  const hideMole = (index: number) => {
    setMoles((currentMoles) => {
      const newMoles = [...currentMoles];
      newMoles[index] = false;
      return newMoles;
    });
  };

  const handleWackMole = (index: number) => {
    if (moles[index]) {
      hideMole(index);
      setScore((score) => score + 1);
    }
    return;
  };

  return (
    <Wrapper>
      {moles?.map((isMole: boolean, idx: number) => (
        <img
          key={`img_${idx}`}
          src={isMole ? mole : hole}
          alt=''
          onClick={() => handleWackMole(idx)}
        />
      ))}
      Score {score}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 750px;
  margin: 0 auto;
`;
