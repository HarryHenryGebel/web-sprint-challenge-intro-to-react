import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  color: teal;
`;

const CharacterDiv = styled.div`
  margin: 1rem;
`;

const DataDiv = styled.div`
  margin: 0.25rem;
  margin-left: 2rem;
`;

const DataItem = styled.p`
  color: black;
`;

export default function Character(props) {
  const {character} = props,
        {name, birth_year, gender} = character;

  return (
    <CharacterDiv>
      <H3>{name}</H3>
      <CharacterInfo birth_year={birth_year} gender={gender}/>
    </CharacterDiv>
  );
}

function CharacterInfo(props) {
  const {birth_year, gender} = props;

  return (
    <DataDiv>
      <DataItem>{birth_year}</DataItem>
      <DataItem>{gender}</DataItem>
    </DataDiv>
);
}
