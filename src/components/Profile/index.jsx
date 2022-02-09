import React from "react";

import { Container, Column, ProfileImage } from "./styles";

export function Profile() {
  return (
    <Container>
      <Column>
        <span>Switch account</span>
        <span>Icaro</span>
      </Column>
      <ProfileImage></ProfileImage>
    </Container>
  );
}
