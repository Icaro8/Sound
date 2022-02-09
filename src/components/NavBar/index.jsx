import React from "react";
import { Link } from "react-router-dom";
import { SiDeezer } from "react-icons/si";

import { Container } from "./styles";

export function NavBar() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">MY MUSIC</Link>
        </li>
        <li>
          <Link to="/">MIXES</Link>
        </li>
        <li>
          <Link to="/">POPULAR</Link>
        </li>
        <li>
          <Link to="/">SEARCH</Link>
        </li>
        <li>
          <Link to="/">
            PLAYER <SiDeezer />
          </Link>
        </li>
      </ul>
    </Container>
  );
}
