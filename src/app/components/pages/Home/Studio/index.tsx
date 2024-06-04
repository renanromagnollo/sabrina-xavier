'use client'

import Image from "next/image"
import styled from "styled-components"

interface StudioProps {

}

const Container = styled.section`
  width: 100vw;
  height: 500px;
  margin: 40px 0;
  padding: 60px;
  display: flex;
  gap: 30px;
  color: ${({theme}) => theme.colors.dark.light};
  background-color: ${({theme}) => theme.colors.light.dark};
`

const TextsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;

  p {
    text-align: justify;
  }

`
export function Studio(props : StudioProps){
    return(
        <Container>
          <div>
            <Image 
              src={`http://picsum.photos//${572}/${296}`}
              alt="studio-image"
              width={572}
              height={296}
              sizes="100%"
              style={{objectFit: 'cover'}}
<<<<<<< HEAD
=======
              priority
>>>>>>> instagram
              unoptimized
            />
          </div>
          <TextsArea>
            <h2>Studio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos dolore quas deleniti unde distinctio magni qui, laborum provident cupiditate, quis exercitationem rem delectus doloribus rerum autem expedita quisquam. Aperiam.</p>
          </TextsArea>
        </Container>
    )
}