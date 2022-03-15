import {useState, useEffect} from 'react';
import {navigateToScreen, resetToScreen} from '../../../services/navigationService';
import {sortArray, modifyRepoArray} from '../../../utils/helper';
import {useIsFocused} from '@react-navigation/native';

export default function useHome(props) {
    
    const [renderDetails, setRenderDetails] = useState(0);
    const [winner, setWinner] = useState({
        name: '',
        difference: 0
    });
    const updatePlayerOneScore = (operation) => {
        if(operation === 'add') {
            props.updatePlayerOneWins(props.playerOneWins + 1);
        } else if(operation === 'sub' && props.playerOneWins !== 0) {
            props.updatePlayerOneWins(props.playerOneWins - 1);
        }
    }

    const updatePlayerTwoScore = (operation) => {
        if(operation === 'add') {
            props.updatePlayerTwoWins(props.playerTwoWins + 1);
        } else if(operation === 'sub' && props.playerTwoWins !== 0) {
            props.updatePlayerTwoWins(props.playerTwoWins - 1);
        }
    }

    useEffect(() => {
        if(props.playerOneWins > props.playerTwoWins) {
            setWinner({
                name: props.firstPlayerName,
                difference: props.playerOneWins - props.playerTwoWins,
            }
       )
        }
    else if(props.playerOneWins < props.playerTwoWins) {
        setWinner({
            name: props.secondPlayerName,
            difference: props.playerTwoWins - props.playerOneWins,
        }
   ) 
   } else {
       setWinner({name: '', difference: 0})
}
    }, [props.playerTwoWins, props.playerOneWins]);

    const onContinue = () => {
        if(props.firstPlayerName.length && props.secondPlayerName.length) {
            setRenderDetails(1);
        }
    }

    const onSave = () => {
            setRenderDetails(0);   
    }

  return [
    renderDetails, 
    updatePlayerOneScore,
    updatePlayerTwoScore,
    onContinue,
    winner,
    onSave,
  ];
}
