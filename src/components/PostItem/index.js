import React from "react"

import * as S from "./styled"
import getThemeColor from '../../utils/getThemeColor'

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink cover bg={getThemeColor()} direction="right" duration={0.6} to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
