import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  h1 {
    color: blueviolet;
    font-size: 35px;
  }

  .brandsbutton {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 30px;
  }

  .brands {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 500px;
    /* margin-top: 10px; */

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Select = styled.select`
  width: 150px;
  height: 30px;
  margin-left: 10px;

  border-radius: 5px;
  background-color: #eee;
`;

export const SubmitButton = styled.button`
  margin: 0 120px 0 0;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  background-color: blueviolet;
  color: white;
`;
