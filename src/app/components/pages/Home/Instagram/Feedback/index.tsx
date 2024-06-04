/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import styled from "styled-components"

interface FeedbackProps {

}

const Container = styled.div`
  width: 80%;
  margin: 50px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.primary.dark};
  border: 1px solid ${({theme}) => theme.colors.primary.light};
`

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({theme}) => theme.colors.primary.light};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20rem;
  }

`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: center;

  h5 {
    color: ${({theme}) => theme.colors.dark.default};
  }
`
export function Feedback(props : FeedbackProps){
    return(
        <Container>
          <ProfileImage>
            <Image 
              src={`http://picsum.photos//300/300`}
              alt="profile-image"
              width={300}
              height={300}
              sizes="100%"
              style={{objectFit: "cover"}}
              unoptimized
            />

          </ProfileImage>
          <Content>
            <span>"</span>
            <Text>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores cum molestiae temporibus amet impedit fugit sunt atque numquam odio vero provident nemo dolorem porro, adipisci a totam harum praesentium.</h4>
              <h5>@renanromagnollo</h5>
            </Text>
            <span>"</span>
          </Content>
        </Container>
    )
}