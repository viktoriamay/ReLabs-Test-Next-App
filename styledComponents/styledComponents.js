import styled, { scss } from 'styled-components'

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 30px;
`

export const HeaderComponent = styled.header`
  padding: 30px 0;
border-bottom: 1px solid gray;
`




export const StyledLink = styled.a`
  color: blue;
  position: relative;

  &.active {
    color: red
  }
  &.active::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background-color: black;
    bottom: 0;
    left: 0;
  }
  `

export const LinksWrapper = styled.ul`
  display: flex;
  gap: 3rem;
`
export const ListItem = styled.li`
  list-style: none;
  /* position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background-color: black;
    bottom: 0;
    left: 0;
  } */
`