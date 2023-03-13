import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/279293207_1954639861590527_6444689357724256617_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG-o-NQYc2LKcStFhOr7RTg8U076oG8zjnxTTvqgbzOOfjPtaRfd3utC0hfxXxD26-Z4Q6cvt3BQQ90d6LOzneU&_nc_ohc=rbd6Gv4Fvz4AX9Q9iXZ&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAGHae8rjDx_18n3SgUcU-qiMsRdC_gOq-jwlO907c5OA&oe=63994C41" />
        </Nav>
    )
}

export default Header
const Nav = styled.nav`
height:70px;
background: #090b13;
display:flex;
align-items:center;
padding: 0 36px;
overflow-x:hidden;
`
const Logo = styled.img`
width: 80px;
`
const NavMenu = styled.div`
display:flex;
flex: 1;
margin-left: 25px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding: 0 12px;
    cursor:pointer;
    img{
        height: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.42px;
        position:relative;
        &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0);
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}
`
const UserImg = styled.img`
width: 48px;
height:48px;
border-radius: 50%;
cursor:pointer;
`