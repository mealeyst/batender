import styled from 'styled-components';

export const SvgFilter = styled(({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="filter-goo-3">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  )
})`
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
`