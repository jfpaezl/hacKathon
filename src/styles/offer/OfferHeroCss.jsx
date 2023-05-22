import styled from "styled-components"

export const OfferHeroCss = styled.section`
    color: var(--text1);
    font-size: 1.3rem;
    padding: 1.6rem;
    background-color: var(--fondoComponents);
    border-radius: 0.5rem;
    .header{
        display: flex;
        gap: 1.6rem;
        img{
            max-width: 8rem;
            border-radius: .5rem;
        }
        h2{
            font-size: 3rem;
            margin: 0;
            padding-top: 1rem;
            font-weight: 500;
        }
        span{
            color: var(--textEtiqueta);
            background-color: var(--fondoEtiqueta);
            font-size: 1.2rem;
            padding: 3px;
            border-radius: .3rem;
        }
        a{
            font-size: 1.6rem;
            color: var(--textButtons);
            text-decoration: none;
            :hover{
                text-decoration: underline;
            }
        }
    }
    .datos{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        .c1{
            color: var(--textButtons);
        }
        .c2{
            color: #00a550;
        }
        .boton{
            display: flex;
            justify-content: end;
            width: 100%;
            height: 100%;
        }
        .link{
            text-decoration: none;
            color: #ffffff;
        }
        button{
            max-width: 23rem;
            height: 4rem;
            font-size: 1.3rem;
            font-weight: 600;
            color: #ffffff;
            background-color: var(--colorButton);
            border-radius: .5rem;
            margin: 0 1.6rem;
            border: none;
            &:hover{
                cursor: pointer;
                background-color: var(--colorButtonHover);
            }
        }
        ul{
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
    }
`