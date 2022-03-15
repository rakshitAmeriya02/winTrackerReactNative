/* eslint-disable jsx-quotes */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';
import useHome from './customHooks/useHome';
import * as CommonActions from '../../actions/commonActions';
import CustomTextField from '../../components/CustomTextField';
import CommonButton from '../../components/CustomButton';
import styles from "./style";
import * as CONST from '../../utils/Constants';
const HomeScreen = (props) => {

  const [
    renderDetails, 
    playerOneName,
    playerTwoName,
    setPlayerOneName,
    setPlayerTwoName,
    playerOneScore, 
    playerTwoScore,
    updatePlayerOneScore,
    updatePlayerTwoScore,
    winner,
    ] = useHome(props);

  
renderPlayerDetailsForm =() => {
  return (
    <View style={styles.Container}>
      <View >
      <Text>{'Player 1 Name'}</Text>
      <CustomTextField 
            name={'player1'}
            value={props.firstPlayerName}
            onChangeText={(text) => props.updatePlayerOneName(text)}
            placeholder={'ENTER NAME'}
             />
      </View>
      <View>
      <Text>{'Player 2 Name'}</Text>
      <CustomTextField 
            name={'player2'}
            value={props.secondPlayerName}
            onChangeText={(text) => props.updatePlayerTwoName(text)}
            placeholder={'ENTER NAME'}
             />
      </View>
      <TouchableOpacity  >
        <Text>
        {'Continue'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

renderScoreView =() => {
  return (
    <View style={styles.Container}>
      <View>
      <Text>{playerOneName}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Text>{'Wins'}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center', justifyContent:'flex-end'}}>
        <CommonButton text={'-'} onPress={updatePlayerOneScore} />
        <CustomTextField 
            name={'player1Score'}
            value={playerOneScore ?? '0'}
        />
        <CommonButton text={'+'} onPress={updatePlayerOneScore} />
      </View>
      </View>
      </View>
      <View >
      <Text>{playerTwoName}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text>{'Wins'}</Text>
      <View style={{flexDirection: 'row'}}>
        <CommonButton text={'-'} onPress={updatePlayerTwoScore} />
        <CustomTextField 
            name={'player2Score'}
            value={playerTwoScore ?? '0'}
             />
        <CommonButton text={'+'} onPress={updatePlayerTwoScore} />
      </View>
      </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
        <Text>{'Current Winner:'}</Text>
        <Text>{winner?.name ?? '' }</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text>{'Win Difference:'}</Text>
        <Text>{winner?.difference ?? 0}</Text>
        </View>
        </View> 
    </View>
  );
}
  return (
    <View style={{flex: 1}}>
      {renderDetails === 0 ? renderPlayerDetailsForm() : renderScoreView()}
    </View>
  );
};

const mapStateToProps = (state) => ({
 firstPlayerName: state.commonReducer.firstPlayerName,
 secondPlayerName: state.commonReducer.secondPlayerName,
 playerOneWins: state.commonReducer.playerOneWins,
 playerTwoWins: state.commonReducer.playerTwoWins,
});

const mapDispatchToProps = (dispatch) => ({
  updatePlayerOneWins: (value) => dispatch(updatePlayerOneWins(value)),
  updatePlayerTwoWins: (value) => dispatch(updatePlayerTwoWins(value)),
  updatePlayerOneName: (value) => dispatch(updatePlayerOneName(value)),
  updatePlayerTwoName: (value) => dispatch(updatePlayerTwoName(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);