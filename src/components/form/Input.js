import styled from 'styled-components';


export const Input = styled(({className, id, ...props}) => {
  return (
    <div className={className}>
      <input type="text" {...props}></input>
      <span className="input_bg"></span>
      <div className="bubble-container"></div>
    </div>
  )
})`
  position: relative;
  display: flex;
  margin: 2rem;
  padding: ${props => props.theme.spacing['s-3']};
  filter: url('#filter-goo-3');
  input {
    font-family: ${props => props.theme.fontFamily.body};
    font-size: ${props => props.theme.fontSize['base']};
    color: ${props => props.theme.colors.grey[0]};
    background-color: transparent;
    border: none;
    position: relative;
    z-index: 10;
    outline: none;
    height: ${props => props.theme.fontSize['4xl']};
    display: flex;
    width: 100%;
    box-sizing: border-box;
  }
  input::placeholder {
    font-family: ${props => props.theme.fontFamily.body};
    color: ${props => props.theme.colors.grey[0]};
    transition: color 0.25s;
  }

  .input_bg {
    background-color: ${props => props.theme.colors.blue[4]};
    transform: scale(1);
    transition: background-color 0.25s, transform 0.25s;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  input:hover + .input_bg, input:focus + .input_bg{
    background-color: ${props => props.theme.colors.blue[2]};
    transform: scale(1.01);
  }
  input:hover::placeholder, input:focus::placeholder {
    color: rgba(255, 255, 255, 0.0);
  }
  .bubble-template {
    opacity: 0;
  }
  .bubble-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .bubble, .bubble-template {
    background-color: ${props => props.theme.colors.blue[4]};
    border-radius: 100%;
    transition: background-color 0.25s;
  }
  input:hover ~ .bubble-container .bubble, input:focus ~ .bubble-container .bubble {
    background-color: ${props => props.theme.colors.blue[2]};
  }

`