import styled from "styled-components";

export const Container = styled.div`
  * {
    padding: 1rem 0;
  }

  h1.title {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .movie img {
    width: 20rem;
    border-radius: 1rem;
  }

  .movie-info {
    margin-left: 4rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    padding: 1rem 2.5rem;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    outline: none;
  }

  button:hover {
    background: #f2f2f2;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  button:focus {
    outline: none;
    box-shadow: none;
    outline-color: transparent;
  }

  .movie-info span {
    line-height: 100%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .release_date {
    opacity: 0.8;
  }
`;
