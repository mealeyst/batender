import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle, faFilter } from '@fortawesome/free-solid-svg-icons'

import { Button } from '../form/Button';
import { Filters } from '../filters/Filters'

const Logo = styled(({className}) => {
  return <FontAwesomeIcon className={className} icon={faWineBottle} />
})`
  font-size: ${props => props.theme.fontSize["4xl"]};
`

export const Header = styled(({className, filters}) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <header className={className}>
      <div className='top'>
        <div className='logo-wrapper'>
          <Logo />
          <h1>Bartender</h1>
        </div>
        <Button onClick={() => setShowFilters(!showFilters)}><FontAwesomeIcon icon={faFilter} /></Button>
      </div>
      {showFilters && <Filters filters={filters} />}
    </header>
  )
})`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${props => props.theme.colors.grey[0]};
  padding: ${props => props.theme.spacing['s-3']} ${props => props.theme.spacing['s-5']};
  box-shadow: ${props => props.theme.shadow['shadow-lg']};
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
  }
  h1 {
    padding-left: ${props => props.theme.spacing["s-4"]};
    margin: 0;
  }
`