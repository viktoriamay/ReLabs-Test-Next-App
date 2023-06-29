'use client';

import { Card } from '@/components/Card/Card';
import { CardsWrapper, Container } from '@/styledComponents/styledComponents';

export default function Page() {
  return (
    <Container>
      <h1>Магазин</h1>
      <CardsWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsWrapper>
    </Container>
  );
}
