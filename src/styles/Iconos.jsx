import { BsPersonCircle, BsTwitter } from 'react-icons/bs'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { styled } from 'styled-components'

export const Person =styled(BsPersonCircle)`
    height: 4rem;
    width: 4rem;
    color: var(--text2);
`
export const Twitter =styled(BsTwitter)`
    height: 2rem;
    width: 2rem;
    color: var(--fondoButtons);
`
export const Facebook =styled(AiFillFacebook)`
    height: 2rem;
    width: 2rem;
    color: var(--fondoButtons);
`
export const Linkedin =styled(AiFillLinkedin)`
    height: 2rem;
    width: 2rem;
    color: var(--fondoButtons);
`