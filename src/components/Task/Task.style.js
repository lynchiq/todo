import styled from 'styled-components'

export const StyledTask = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    border-bottom: 1px solid #000;
  }
`

export const StyledButtonGroup = styled.div`
  display: flex;

  button {
    margin-left: 10px;
  }
`
