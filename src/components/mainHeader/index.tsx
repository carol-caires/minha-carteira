import React, { useMemo}  from 'react'
import { Container, Profile, Welcome, UserName } from './styles'
import emojis from '../../utils/emojis'
import Toggle from '../toggle'

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const i = Math.floor(Math.random() * emojis.length);
        return emojis[i]
    }, [])

    return (
        <Container>
            <Toggle></Toggle>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Carol Caires</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;