import * as S from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { RecentGames } from "../../components/RecentGames/RecentGames";

export const HomeScreen = () => {
  return (
    <S.Container>
      <Logo />
      <RecentGames />
    </S.Container>
  )
}
