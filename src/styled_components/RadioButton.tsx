/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const RadioButton = styled.div`
    margin-right: 3.5rem;
    input[type="radio"] {
        appearance: none;
        width: 100%;
        height: 3.5rem;
        position: absolute;
        z-index: 998;
        cursor: pointer;
    }  
    label {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s linear;
        color: #fff;
        border: 0;
        padding: 1.25rem;
        border-radius: 3rem;
        background-color: #292929;
        color: #fff;
        font-size: 16px;
    }  
    input[type="radio"]:checked + label {
        color: #1F1F1F;
        background: #FDF4E2;
    }
    @media (min-width: 1200px) {
        label {
            background: linear-gradient(#292929 50%, #fff 50%);
            background-repeat: repeat;
            background-size: 100% 200%;
            font-size: 20px;
        }
        input[type="radio"]:hover + label {
            color: #1F1F1F;
            background-position: 0 100%;
        }
    }
`;

export default RadioButton;