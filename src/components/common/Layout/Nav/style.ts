import theme from "../../../../styles/theme";
import styled from "styled-components";

interface opacityProps {
  opacity: number
}

export const navDiv = styled.div<opacityProps>`
  box-sizing: border-box;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-right: 0;
  height: 100vh;
  background-color: ${theme.color.darkBrown};
  transition: all 1s ease;
  filter: drop-shadow(0 2px 3px #3E1B11);
`
export const flexDiv = styled.div<opacityProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: ${(props) => props.opacity === 0 ? '1rem' : '11rem'};
  height: 1.23rem;
  line-height: 1.23rem;
  transition: all 0.8s ease;
`
export const titleSpan = styled.span<opacityProps>`
  font-size: 22px;
  color: ${theme.color.white};
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease;
  white-space: nowrap;
  height: 1.23rem;
  pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
`
export const arrowDiv = styled.div<opacityProps>`
  font-size: 22px;
  color: ${theme.color.white};
  cursor: pointer;
  pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
  opacity: ${(props) => props.opacity};
  transition: all 0.2s ease;
`
export const flexColumnDiv = styled.div<opacityProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.opacity === 0 ? '2rem' : '11rem'};
  gap: 1rem;
  opacity: ${(props) => props.opacity};
  transition: all 0.8s ease;
  white-space: nowrap;
  padding-right: 1rem;
  .logout {
    width: 6rem;
  }
  a{
    pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
  }
  img {
    pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
    width: 8rem;
  }
`
export const flexButtonDiv = styled.div<opacityProps>`
  display: flex;
  gap: 0.5rem;
  a {
    pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
  }
`
export const introButton = styled.button<opacityProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${theme.color.white};
  cursor: pointer;
  pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
`
export const menuButtonDiv = styled.div<opacityProps>`
  margin-top: 0.5rem;
  cursor: pointer;
  display: ${(props) => props.opacity === 1 ? 'none' : 'block'};
`