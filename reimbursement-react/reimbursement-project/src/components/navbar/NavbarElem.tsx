import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

/* margin-top: -80px; */
export const Nav = styled.nav`
    backgroud-color: #000;
    height: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    background-color: #000;
    `

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.0rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    `;

export const MobileIcon = styled.div`
        display: none;

        @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
            color: #fff;
        }
    `

export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;
        
        @media screen and (max-width: 769px) {
            display: none;
        }
    `

export const NavItem = styled.li`
        height: 80px;
    `

export const NavLinks = styled(LinkRouter)`
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        
        &.active {
            border-bottom: 3px solid #01bf71
        }`

export const NavBtn = styled.nav`
        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
            display: none;
        }`

export const NavBtnLink = styled(LinkRouter)`
        border-radius: 50px;
        background: #01bf71;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }`

        export const PenBtnLink = styled(LinkRouter)`
        border-radius: 50px;
        margin-left: 2em;
        background: #F4B400;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }`

        export const UserNavBtnLink = styled.button`
        border-radius: 50px;
        background: #01bf71;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }`