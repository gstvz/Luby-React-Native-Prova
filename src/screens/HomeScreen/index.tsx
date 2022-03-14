import * as S from "./styles";
import { Logo, RecentGames } from "@components";

export const HomeScreen = () => {
  return (
    <S.Container>
      <Logo />
      <RecentGames />
    </S.Container>
  )
}
