import React from "react";
import { Button } from "../../../../assets/Button";
import styled from "styled-components";
import myPhoto from "../../../../assets/images/me-photo-my.jpg";

export const Main = () => {
    return (
        <StyledMain>
            <div>
                <h1>Maryia is a Web Developer.</h1>
                <h2>She crafts responsive websites where technologies meet creativity</h2>
                <Button/>
            </div>
            <Photo src={myPhoto} alt=""/>            
        </StyledMain>
    )
}

const StyledMain = styled.div`
min-heignt: 100vh;
background-color: grey;
`

const Photo = styled.img`
width: 380px;
height: 310px;
object-fit: cover;
`