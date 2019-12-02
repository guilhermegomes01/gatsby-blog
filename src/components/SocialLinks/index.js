import React from "react"

import Icons from "./icons"
import Links from "./content"

import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinkWrapper>
    <S.SocialLinksList>
      {Links.map((link, index) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={index}>
            <S.SocialLinksLink href={link.url} title={link.label} target="_blank">
                <S.IconWrapper>
                    <Icon />
                </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinkWrapper>
)

export default SocialLinks
