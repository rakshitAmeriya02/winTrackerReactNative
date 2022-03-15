import {useState, useEffect} from 'react';
import {navigateToScreen, resetToScreen} from '../../../services/navigationService';
import {sortArray, modifyRepoArray} from '../../../utils/helper';
import {useIsFocused} from '@react-navigation/native';

export default function useHome(props) {
    const [playerOneName, setPlayerOneName] = useState('');
    const [playerTwoName, setPlayerTwoName] = useState('');
    const [renderDetails, setRenderDetails] = useState(1);
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    const updatePlayerOneScore = (operation) => {
        if(operation === 'add') {
            setPlayerOneScore(playerOneScore + 1);
        } else if(operation === 'sub') {
            setPlayerOneScore(playerOneScore - 1);
        }
    }

    const updatePlayerTwoScore = (operation) => {
        if(operation === 'add') {
            setPlayerTwoScore(playerTwoScore + 1);
        } else if(operation === 'sub') {
            setPlayerTwoScore(playerTwoScore - 1);
        }
    }

  return [
    renderDetails, 
    playerOneName,
    playerTwoName,
    setPlayerOneName,
    setPlayerTwoName,
    playerOneScore, 
    playerTwoScore,
    updatePlayerOneScore,
    updatePlayerTwoScore,
  ];
}
