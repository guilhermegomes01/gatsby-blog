import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          position
          description
          title
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper className="Profile-wrapper">
      <S.ProfileLink to="/" cover bg="#16202c" direction="left" duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
