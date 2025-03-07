import { Value, Title, Text } from "./styles";

interface ResumeProps{

  value: string
  title: string
  text: string

}

export function Resume({value, title, text}: ResumeProps){

  return(

    <div className="d-flex flex-column justify-content-center align-items-center text-center gap-3 p-3 p-md-5 bgWhite shadow-sm rounded-4 h-100">

      <Value>{value}</Value>

      <Title>{title}</Title>
      <Text>{text}</Text>

    </div>

  )

}
