
 import { Container, FooterComponent, FooterWrapper } from "@/styledComponents/styledComponents"
import Link from "next/link"
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {
  return (
    <FooterComponent>
    <Container>
    <FooterWrapper>

<span>

       Made by viktoriamay
</span>
<span>{new Date().getFullYear()}</span>
<div>

<Link href={'https://github.com/viktoriamay'} target="_blank"><GitHubIcon sx={{marginRight: '1rem'}} color={ 'white'}/></Link>
<Link href={'https://t.me/etern8ty'} target="_blank"><TelegramIcon color={ 'white'}/></Link>
</div>
    </FooterWrapper>
    </Container>
    </FooterComponent>
  )
}