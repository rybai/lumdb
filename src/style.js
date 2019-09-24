import styled from 'styled-components';

export const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
  > p {
    position: absolute;
    top: 8px;
    left: 16px;
    text-shadow: 2px 2px #ff0;
  }
`;

export const Poster = styled.img`
  position: relative;
  box-shadow: 0 0 35px black;
`;

export const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

export const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 5%;
  display: flex;
  > div {
    margin-left: 20px;
    margin-top: -2rem;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

export const MovieContainer = styled.div`
  top: 8px;
  left: 16px;
  position: relative;
  > p.addusermovie {
    color: green;
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    top: -15px;
    left: -65px;
    -webkit-text-stroke: 1px black;
  }
  > p.removeusermovie {
    color: red;
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    top: -15px;
    right: -65px;
    -webkit-text-stroke: 1px black;
  }
`;
