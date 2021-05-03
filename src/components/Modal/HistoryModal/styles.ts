import styled from "styled-components";

export const Container = styled.div`
  /* background: var(--background); */
  height: auto;

  max-width: 380px;

  margin: 1rem auto;

  padding: 0.45rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  font-family: "Open Sans", sans-serif;

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 19.35rem;
    height: 4rem;

    cursor: pointer;

    margin: 0.65rem;
    padding: 1.2rem;

    border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.2);

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }

    div > span:first-child {
      color: var(--gray-300);
      font-size: 0.65rem;
      margin-bottom: 0.25rem;
    }

    div > span:last-child {
      margin-left: 0.45rem;
    }
  }

  .time,
  .payment {
    display: flex;
    flex-direction: column;
  }

  .time {
  }

  .payment {
    img {
      width: 1rem;
      height: 0.45rem;

      margin: 0.15rem;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  svg {
    font-size: 2.25rem;

    margin: 0.25rem;
    padding-right: 0.45rem;

    color: var(--green-300);
  }

  span {
    margin-top: 0.45rem;

    color: var(--green-300);
    font-size: 1.5rem;
    font-weight: 600;
  }
`;