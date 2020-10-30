import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Select = styled(({className, ...props}) => {
  return (
    <ReactSelect className={className} classNamePrefix='select' {...props} />
  )
})`
  outline: none;
  font-size: ${props => props.theme.fontSize['base']};
  margin: 2rem;
  .select {
    &__control--is-focused {
      // transform: scale(1.01);
    }
    &__control {
      background-color: ${props => props.theme.colors.blue[4]};
      transition: background-color 0.25s ease-out, transform 0.25s ease-out;
      border-color: transparent !important;
      padding: ${props => props.theme.spacing['s-3']};
      border-radius: ${props => props.theme.radius.none}
    }
    &__placeholder {
      color: ${props => props.theme.colors.grey[0]};
      font-family: ${props => props.theme.fontFamily.body};
    }
    &__indicator-separator {
      background-color: ${props => props.theme.colors.grey[0]};
    }
    &__indicator {
      color: ${props => props.theme.colors.grey[0]};
    }
    &__single-value {
      color: ${props => props.theme.colors.grey[0]};
    }
    &__menu {
      background-color: ${props => props.theme.colors.blue[4]};
      border-radius: ${props => props.theme.radius.none};
    }
    &__option {
      background-color: transparent;
      color: ${props => props.theme.colors.grey[0]};
      font-family: ${props => props.theme.fontFamily.body};
      transition: background-color 0.25s ease-out;
    }
    &__multi-value {
      background-color: ${props => props.theme.colors.blue[2]};
      color: ${props => props.theme.colors.grey[0]};
      transition: background-color 0.25s ease-out;
    }
    &__multi-value__label {
      color: ${props => props.theme.colors.grey[0]};
      font-family: ${props => props.theme.fontFamily.body};
    }
    &__multi-value__remove {
      transition: background-color 0.25s ease-out, color 0.25s ease-out;
      &:hover {
        background-color: ${props => props.theme.colors.red[3]};
        color: ${props => props.theme.colors.red[7]};
      }
    }
  }
  .select__control:hover {
    background-color: ${props => props.theme.colors.blue[2]};
    transform: scale(1.01);
    .select__multi-value {
      background-color: ${props => props.theme.colors.blue[0]};
    }
  }
  .select__option:hover {
    background-color: ${props => props.theme.colors.blue[2]};
  }
`