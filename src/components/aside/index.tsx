import React from 'react'
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles'

import LogoFile from '../../assets/logo.svg'

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

const Aside: React.FC = () => {
    return (
        <Container>
           <Header>
                <LogoImg src={LogoFile} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
           </Header>

           <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/> 
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward/> 
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward/> 
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp/> 
                    Sair
                </MenuItemLink>
           </MenuContainer>
        </Container>
    );
}

export default Aside;