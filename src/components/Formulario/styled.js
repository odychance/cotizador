import styled from '@emotion/styled'

export const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

export const Label = styled.label`
    flex: 0 0 100px;
`
export const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`

export const InputRadio = styled.input`
    margin: 0 1rem;
`

export const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .2s ease;
    margin-top: 3rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`

export const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`