import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormSelect = styled.select`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none; 
    border-radius: 4px;
`;

export const FormOption = styled.option`
    color: #ADB9D3;
`;

export const Container = styled.div`
    height: 1500px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-color: #DB4437;
    );
    `;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
    `;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 2rem;
text-decoration: none;
color: #fff;
font-size: 1.5rem;
display: flex;
align-items: center;
justify-self: flex-start;

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        margin-top: 30px;
    }
`

export const Form = styled.form`
    background: #000;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    margin-bottom: 4rem;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 12px;
    border: none; 
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #f4b400;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;