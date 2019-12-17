import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink to={prevPage} cover bg="#16202c" direction="left" duration={0.6}>
        ← Página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink to={nextPage} cover bg="#16202c" direction="right" duration={0.6}>
        Próxima página →
      </AniLink>
    )}
  </S.PaginationWrapper>
)

export default Pagination
