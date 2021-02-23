import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import { sidebarButtonsItems } from '../../data/SidebarButtonsItems'

function Sidebar() {
    return (
        <Wrapper>
            <ComposerWrapper>
                <Compose />
            </ComposerWrapper>

            <SideButtonWrapper>
                {
                    sidebarButtonsItems.map(item => (
                        <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                    ))

                }
            </SideButtonWrapper>

            <MeetWrapper>
                {/* google meet stuff */}
            </MeetWrapper>

            <HangoutsWrapper>
                {/* Hangouts stuff */}
            </HangoutsWrapper>

            <BottomIconsWrapper>

            </BottomIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: 100vh;
`

const ComposerWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`

const SideButtonWrapper = styled.div``

const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 8px;

    :hover {
        background-color: #f5f7f7;
    }
`

const MeetWrapper = styled.div``

const HangoutsWrapper = styled.div``

const BottomIconsWrapper = styled.div``

