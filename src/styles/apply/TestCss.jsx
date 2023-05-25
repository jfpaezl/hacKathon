import styled from "styled-components"

export const TestCss = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .h2{
        font-size: 1.5rem;
        color: var(--textEtiqueta);
    }
    .advertencia{
        color: #960505;
        font-size: 1.2rem;
    }
    .punctuation{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .encabezado{
            display: flex;
            justify-content: space-around;
        }
        .skilBar,
        .skilBar::after{
            position: relative;
            max-width: 278px;
            width: 100%;
            height: .8rem;
            background-color: var(--text2);
            border-radius: 2rem;
            overflow: hidden;
        }
        .skilBar::after{
            content: '';
            position: absolute;
            left: -100%;
            background-color: var(--textButtons);
            transition: 800;
        }
        .skilBar70::after{
            transform: translateX(${props => props.punctuation}%);
        }
    }

    button{
        max-width: 23rem;
        height: 4rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        background-color: var(--fondoButtons);
        border-radius: .5rem;
        border: none;
        &:hover{
            cursor: pointer;
            background-color: var(--textButtons);
        }
    }
    .temp{
        position: absolute;
        left: 50%;
        top: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem;
        color: var(--textEtiqueta);
        background-color: var(--hoberButtons);
        border: solid 1px var(--textEtiqueta);
        border-radius: .5rem;
    }
    .temp2{
        color: #960505;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .containerQuestion{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    h3{
        user-select: none;
        
    }
    input{
        cursor: pointer;
    }
    input:checked + label{
        color: var(--textButtons);
        font-weight: 600;
        border-bottom: solid 2px ;
    }
    label{
        user-select: none;
        border-radius: .5rem;
        &:hover{
            cursor: pointer;
        }
    }
    .button{
        display: block;
        background-color: var(--textButtons);
        border: none;
        width: fit-content;
        padding: 1rem;
        border-radius: .5rem;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        &:hover{
            cursor: pointer;
            background-color: var(--fondoButtons);
        }
    }
`