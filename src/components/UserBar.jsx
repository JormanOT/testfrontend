import styled from 'styled-components'
import {
    AiOutlineDatabase, AiOutlineTeam,
    AiOutlineUserSwitch, AiOutlineWallet,
    AiTwotoneBank
} from "react-icons/ai";
import { motion } from 'framer-motion'

const UserBar = () => {
    const deparment = [
        { name: 'Gerencia', icon: <AiTwotoneBank size={'1.2rem'} /> },
        { name: 'Contraloria', icon: <AiOutlineWallet size={'1.2rem'} /> },
        { name: 'Recursos Humanos', icon: <AiOutlineTeam size={'1.2rem'} /> },
        { name: 'Servicio al Cliente', icon: <AiOutlineUserSwitch size={'1.2rem'} /> }
    ]
    return (
        <Container>
            <h4> <AiOutlineDatabase /> Departamentos</h4>
            <List>
                {deparment.map((item, i) => (
                    <li
                        key={i}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </li>
                ))}
            </List>
        </Container>
    )
}

const Container = styled.div`
    width : 20%;
    position : relative;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 2em;
    background-color: white;
    height: 100vh;
    box-shadow : var(--Shadow);
    padding-top : 8em;
    padding-left : 2em;

    h1, h4{
      color : black;
    }
`
const List = styled.ul`
    width : 100%;
    color : black;
    display : flex;
    flex-direction : column;
    gap : 1em;

    li{
        display : flex;
        flex-direction : row;
        justify-content : start;
        align-items : center;
        gap: 1em;
        max-width : 200px;
        text-decoration : none;
        list-style : none;
        height : 40px;
        font-size : .8rem;
        font-weight : 600;
        padding-left : 1em;
        border-radius : 1em;
        transition : .3s all ease;

        &:hover{
            cursor : pointer;
            background-color : var(--Blue);
            color : white;
        }
    }
`

export default UserBar