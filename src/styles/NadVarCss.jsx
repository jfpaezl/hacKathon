import styled from 'styled-components'

export const NadVarCss = styled.header`
    background-color: var(--fondoComponents);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .contenedorNav{
        display: flex;
        align-items: center;
        padding: 0 1.6rem;
    }
    .icono{
        display: flex;
        align-items: center;
        padding: 2.2rem 1.6rem;
        margin: 0 auto;
        max-height: 80px;
        max-width: 1280px;
        margin-left: 3.2rem;
    }

    .logo{
        width: 4rem;
        height: 4rem;
    }

    .nav{
        display: flex;
        font-size: 1.6rem;
        gap: .8rem;
        :hover{
            color: var(--fondoButtons);
        }
    }
    .navlink{
        text-decoration: none;
        color: var(--text2);
        padding: 0 .8rem;
    }
    .iconoPerson{
        margin-right: 3.2rem;
    }
`