import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    <MenuIcon />
                </div>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""></img>
            </LogoWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div``

const LogoWrapper = styled.div``