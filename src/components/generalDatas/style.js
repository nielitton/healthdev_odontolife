import { styled } from "styled-components";

export const FormLineStyle = styled.div`
  border-top: 1px solid var(--border-color);
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  .just-one {
    width: 100%;
  }
  .text-tile {
    color: var(--text-color-title);
  }
  .separated-inputs {
    width: 60%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 25px;
  }
  .title {
    font-size: 13px;
    width: 11%;
  }
  .select-input {
    width: 60%;
  }
  .password-button {
    width: 150px;
  }
  .password-title {
    width: 11%;
  }
  .new-password-inputs {
    width: 60%;
  }
  .container-upload-image {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    width: 665px;
    padding: 5px 60px;
    text-align: center;
  }
  .blue {
    color: var(--blue-color);
  }
  .profile-image-upload {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-right: 180px;
    font-size: 16px;
    img {
        width: 50px;
        height: 50px;
    }
    .upload-icon {
        cursor: pointer;
        width: 40px;
    }
    .text-upload {
        width: 70%;
    }
  }
  .phone-email-container {
    width: 60%;
    display: flex;
    justify-content: center;
  }
  ::placeholder {
    color: var(--text-color-light);
  }
`;

export const InputStyle = styled.input`
  width: 60%;
  height: 41px;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  padding: 0px 16px;
  outline-color: var(--blue-color);
  margin: 0 auto;
`;
