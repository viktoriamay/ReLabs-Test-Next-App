'use client';

import {
  Container,
  ListItem,
  LinksWrapper,
  HeaderComponent,
  StyledLink,
} from '@/styledComponents/styledComponents';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <HeaderComponent>
      <Container>
        <LinksWrapper>
          <ListItem>
            <Link passHref legacyBehavior href={'/'}>
              <StyledLink className={pathname == '/' ? 'active' : ''}>
                Главная страница
              </StyledLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link passHref legacyBehavior href={'/login'}>
              <StyledLink className={pathname == '/login' ? 'active' : ''}>
                Авторизация
              </StyledLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link passHref legacyBehavior href={'/shop'}>
              <StyledLink className={pathname == '/shop' ? 'active' : ''}>
                Магазин
              </StyledLink>
            </Link>
          </ListItem>
        </LinksWrapper>
      </Container>
    </HeaderComponent>
  );
};
