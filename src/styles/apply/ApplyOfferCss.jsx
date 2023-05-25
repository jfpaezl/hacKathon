import { styled } from "styled-components"

export const ApplyOfferCss = styled.div`
    display: flex;
    gap: 1rem;
    .container{
        display: flex;
        flex-direction: column;
        color: var(--text1);
        background-color: var(--fondoComponents);
        padding: 1.6rem;
        font-size: 1.5rem;
        gap: 1.5rem;
        height: 100%;
        width: 100%;
    }
    .contDes{
        max-width: 64rem;
        flex-shrink: 0;
        gap: 3rem;
        h1{
            font-size: 3rem;
            font-weight: 500;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 3rem;
        } 
        fieldset{
            border: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .subir{
            display: flex;
            flex-direction: column;
        }
    }
    .boton{
        display: flex;
        justify-content: start;
        width: 100%;
        height: 100%;
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
    .file-upload{
        margin-top: 1rem;
        display: flex;
        justify-content: start;
        align-items: center;
        .file-upload-label{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            border-radius: .5rem;
            &:hover{
                background-color: var(--hoberButtons);
                cursor: pointer;
        }
        .file-upload {
            position: relative;
            overflow: hidden;
            display: inline-block;

        }

        
    }
    }
    .input{
        display: none;
    }
    label, input{
        cursor: pointer;
    }
    ul{
        padding-left: 2rem;
        font-size: 1.3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`