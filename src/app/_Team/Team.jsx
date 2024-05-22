import card from '../../Assests/Card.jpg'
import React from 'react';
import styled from 'styled-components';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media (min-width: 600px) {
    width: calc(50% - 20px);
  }
`;

const ImageContainer = styled.div`
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Team = () => (
  <div>
    <h1 style={{textAlign:"center",border:'1px solid black'}}>Team</h1>
    <div style={{display:'flex'}}>
    {/* 1st row */}
  <Container>
    <StyledCard
      cover={
        <ImageContainer>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"

          />
          <Overlay className="overlay">
            <Text>
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
            </Text>
          </Overlay>
        </ImageContainer>
      }
    >
    </StyledCard>
    <StyledCard
      cover={
        <ImageContainer>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <Overlay className="overlay">
            <Text>
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
            </Text>
          </Overlay>
        </ImageContainer>
      }
    >
    </StyledCard>
  </Container>
  {/* 2nd row */}
  <Container>
    <StyledCard
      cover={
        <ImageContainer>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <Overlay className="overlay">
            <Text>
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
            </Text>
          </Overlay>
        </ImageContainer>
      }
    >
    </StyledCard>
    <StyledCard
      cover={
        <ImageContainer>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <Overlay className="overlay">
            <Text>
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
            </Text>
          </Overlay>
        </ImageContainer>
      }
    >
    </StyledCard>
  </Container>
  </div>
    </div>
);

export default Team;
