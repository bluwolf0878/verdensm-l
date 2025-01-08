import React from 'react'
import { ContainerStyled } from './container.styled'

export const Container = ({className,children,color,height}) => {
  return (
   <ContainerStyled className={className} color={color} height={height}>
    {children}
   </ContainerStyled>
  )
}
