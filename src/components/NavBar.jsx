import { UserButton } from '@clerk/clerk-react'
import styled from 'styled-components'
import { Logo } from '../assets/'
import { IoSearchOutline } from "react-icons/io5";



const NavBar = () => {
    return (
        <Container>
            <img
                src={Logo}
                width={90}
                height={50}
                alt="Logo"
            />

            <InputContainer>

                <Input placeholder='Ingresa el nombre del archivo' />

                <IoSearchOutline color='black' size={'1.2rem'} />

                <Button>
                    Buscar
                </Button>

            </InputContainer>



            <UserButton />
        </Container>
    )
}

const Container = styled.div`
    width : 100%;
    height : 60px;
    display : flex;
    justify-content : space-between;
    padding : .5em 3em;
    align-items : center;
    gap : 2em;
    background-color : white;
    position : absolute;
    top : 0;
    box-shadow : var(--Shadow);
    z-index : 100;
`
const Input = styled.input`
    width : 100%;
    height : 40px;
    border-radius : 2em;
    border : none;
    padding : 5px;
    font-size : .8rem;
    font-weight : 600;
    transition : 0.3s ease;
    background-color : var(--BgColor);
    color : black;
    outline : none;
    padding-left : 3.5em;

    :hover{
        border : 1px solid gray;
    }

`
const InputContainer = styled.div`
    width : 40%;
    position : relative;

    svg{
        position : absolute;
        top : 10px;
        left : 20px;
    }
`
const Button = styled.button`
    width : 80px;
    height : 40px;
    position : absolute;
    top : 0px;
    right : 0px;
    border-radius : 0 1.5em 1.5em 0;
    background-color : rgb(13, 13, 183);
    border: none;
    outline : none;

    &:hover {
        cursor : pointer;
        background-color : var(--BlueHover);
    }
`

export default NavBar