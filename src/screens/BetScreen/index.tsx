import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { GameActions, GamesButtons, Logo, NumbersButtons } from "@components";
import { CartState, GamesState, GameType } from "@shared/types";
import { sortArray } from "@shared/helpers";

import { gamesActions } from "@store/games";
import { getGamesData } from "@store/games/thunk";
import { cartActions } from "@store/cart";

export const BetScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);
  const selectedNumbers = useSelector(
    (state: GamesState) => state.games.selectedNumbers
  );
  const cart = useSelector((state: CartState) => state.cart.bets);

  useEffect(() => {
    dispatch(getGamesData());
  }, []);

  const handleGameFilter = (clickedGame: GameType) => {
    const selectedGame = games.find((game) => game.id === clickedGame.id);

    dispatch(gamesActions.setActiveGame({ selectedGame }));
    dispatch(gamesActions.setSelectedNumbers({ selectedNumbers: [] }));
  };

  const checkIfGameIsActive = (game: GameType) => {
    return activeGame.id === game.id;
  };

  const handleNumberButtonClick = (selectedNumber: number) => {
    if (selectedNumbers.includes(selectedNumber)) {
      const filteredSelectedNumbers = selectedNumbers.filter((number) => {
        return number !== selectedNumber;
      });

      dispatch(
        gamesActions.setSelectedNumbers({
          selectedNumbers: filteredSelectedNumbers,
        })
      );
    } else if (selectedNumbers.length === activeGame.max_number) {
      Alert.alert(
        "Selecting numbers",
        `You already chose ${activeGame.max_number} numbers!`
      );
      return;
    } else {
      dispatch(
        gamesActions.setSelectedNumbers({
          selectedNumbers: [...selectedNumbers, selectedNumber],
        })
      );
    }
  };

  const checkIfNumberIsSelected = (number: number) => {
    return selectedNumbers.includes(number);
  };

  const handleCompleteGame = () => {
    const numbersLeft = activeGame.max_number - selectedNumbers.length;

    if (numbersLeft === 0) {
      Alert.alert("Complete Game", "Your game is already completed!");
      return;
    }

    const randomNumbers: number[] = [];

    while (randomNumbers.length !== numbersLeft) {
      let randomNumber = Math.floor(Math.random() * activeGame.range);

      if (
        !randomNumbers.includes(randomNumber) &&
        !selectedNumbers.includes(randomNumber) &&
        randomNumber !== 0
      ) {
        randomNumbers.push(randomNumber);
      }
    }

    dispatch(
      gamesActions.setSelectedNumbers({
        selectedNumbers: [...selectedNumbers, ...randomNumbers],
      })
    );
  };

  const handleClearGame = () => {
    if (selectedNumbers.length === 0) {
      Alert.alert("Clear Game", "You haven't selected any number!");
      return;
    }

    Alert.alert(
      "Clear Game",
      "Are you sure you want to clear your game?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(
              gamesActions.setSelectedNumbers({
                selectedNumbers: [],
              })
            );
            Alert.alert("Clear Game", "Game cleared!");
          },
        },
        {
          text: "Cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const isGameAlreadyOnCart = (game: {
    game_id: number;
    numbers: number[];
  }) => {
    const gameType = game.game_id;
    const gameNumbers = game.numbers;
    let boolean = false;

    for (const item of cart) {
      if (item.game_id === gameType) {
        boolean = JSON.stringify(gameNumbers) === JSON.stringify(item.numbers);
      }
    }

    return boolean;
  };

  const handleAddGameToCart = () => {
    setIsLoading(!isLoading);
    if(selectedNumbers.length === 0) {
      Alert.alert("Add to cart", "You didn't select any numbers!");
      return;
    } else if(selectedNumbers.length < activeGame.max_number) {
      Alert.alert("Add to cart", `You can still select ${activeGame.max_number - selectedNumbers.length} numbers!`);
      return;
    }
    
    const sortedNumbers = sortArray(selectedNumbers);
    if (
      isGameAlreadyOnCart({
        game_id: activeGame.id,
        numbers: sortedNumbers,
      })
    ) {
      Alert.alert("Add to cart", "You already have this game on your cart!");
      return;
    }

    dispatch(
      cartActions.addGameToCart({
        game_id: activeGame.id,
        numbers: sortedNumbers,
      })
    );
    dispatch(
      cartActions.calculateCartTotal({
        games: games,
      })
    );
    dispatch(gamesActions.setSelectedNumbers({ selectedNumbers: [] }));
    Alert.alert("Add to cart", "This game was added to the cart! 👌", [
      {
        text: "OK",
        onPress: () => {
          setIsLoading(!!isLoading);
        },
      },
    ]);    
  };

  return (
    <S.Container>
      <S.Content
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Logo />
        <S.Title>
          <S.NewBet>NEW BET </S.NewBet>
          <S.GameName>FOR {activeGame.type.toUpperCase()}</S.GameName>
        </S.Title>
        <GamesButtons
          title="Choose a game"
          types={games}
          handleGameFilter={handleGameFilter}
          isActive={checkIfGameIsActive}
        />
        <S.GameDescription>
          <S.SubTitle>Fill your bet</S.SubTitle>
          <S.Description>{activeGame.description}</S.Description>
        </S.GameDescription>
        <NumbersButtons
          color={activeGame.color}
          range={activeGame.range}
          handleNumberButtonClick={handleNumberButtonClick}
          checkIfNumberIsSelected={checkIfNumberIsSelected}
        />
        <GameActions
          handleCompleteGame={handleCompleteGame}
          handleClearGame={handleClearGame}
          handleAddGameToCart={handleAddGameToCart}
          isLoading={isLoading}
        />
      </S.Content>
    </S.Container>
  );
};
