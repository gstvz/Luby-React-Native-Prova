import * as S from './styles';

type AuthHeaderProps = {
  screen: string;
}

export const AuthHeader = (props: AuthHeaderProps) => {
  return (
    <S.Container>
      <S.TopTitle>The Greatest App</S.TopTitle>
      <S.HighlightedTitle>for</S.HighlightedTitle>
      <S.BottomTitle>LOTTERY</S.BottomTitle>
      <S.ScreenTitle>{props.screen}</S.ScreenTitle>
    </S.Container>
  )
}
