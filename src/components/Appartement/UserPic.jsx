import React from 'react'
import styled from 'styled-components'

const UserPicture = styled.div`
height: 100px;
width: 100px;
img{
    height: 100px;
width: 100px;
border-radius: 50%;
}
`


export default function UserPic() {
  return (
    
    <UserPicture>
        <img alt='propriétaire' src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"></img>
    </UserPicture>
  )
}
