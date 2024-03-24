import styled from "styled-components";

const ContainerImage = styled.div`
  max-width: 100%;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

interface ImageProps {
  imageUrl: string;
}

export const ImageContainer = ({ imageUrl }: ImageProps) => {
  return (
    <ContainerImage>
      <StyledImage src={imageUrl} alt="Imagem" />
    </ContainerImage>
  );
};
