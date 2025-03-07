import { Container, Title, Text, Icon } from './styles';

interface ServiceProps{

  icon: string
  title: string
  text: string
  altIcon: string
}

export function Service({icon, title, text, altIcon}: ServiceProps){

  return(

    <Container className='d-flex flex-column justify-content-center align-items-center text-center h-100 gap-4'>

      <Icon src={icon} alt={altIcon} loading="lazy" />
      <Title>{title}</Title>
      <Text className='text-muted'>{text}</Text>

    </Container>

  )

}
