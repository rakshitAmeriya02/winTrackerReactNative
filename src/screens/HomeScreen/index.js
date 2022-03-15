/* eslint-disable jsx-quotes */
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import useHome from './customHooks/useHome';
import * as CommonActions from '../../actions/commonActions';
import CustomTextField from '../../components/CustomTextField';
import CommonButton from '../../components/CustomButton';
import styles from "./style";
import * as CONST from '../../utils/Constants';
import { TextInput } from "react-native-gesture-handler";
const HomeScreen = (props) => {

  const [
    renderDetails,
    updatePlayerOneScore,
    updatePlayerTwoScore,
    onContinue,
    winner,
  ] = useHome(props);

  useEffect(() => {

  }, [renderDetails])
  renderPlayerDetailsForm = () => {
    return (
      <View style={styles.Container}>
        <View >
          <Text style={styles.playerName} >{'Player 1 Name'}</Text>
          <CustomTextField
            name={'player1'}
            value={props.firstPlayerName}
            onChangeText={(text) => props.updatePlayerOneName(text)}
            placeholder={'e.g. Tony Stark'}
          />
        </View>
        <View>
          <Text style={styles.playerName} >{'Player 2 Name'}</Text>
          <CustomTextField
            name={'player2'}
            value={props.secondPlayerName.toString()}
            onChangeText={(text) => props.updatePlayerTwoName(text)}
            placeholder={'e.g. Steve Rogers'}
          />
        </View>
        <TouchableOpacity onPress={() => onContinue()} style={styles.button}  >
          <Text style={styles.buttonText} >
            {'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderScoreView = () => {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.playerDetails}>{props.firstPlayerName}</Text>
          <View style={styles.detailsView}>
            <Text style={styles.winsText} >{'Wins'}</Text>
            <View style={styles.scoreView}>
              <CommonButton text={'-'} onPress={() => updatePlayerOneScore('sub')} />
              <TextInput
                name={'player1Score'}
                value={props.playerOneWins.toString()}
                onChangeText={() => { }}
                style={styles.score}
              />
              <CommonButton text={'+'} onPress={() => updatePlayerOneScore('add')} />
            </View>
          </View>
        </View>
        <View >
          <Text style={styles.playerDetails} >{props.secondPlayerName}</Text>
          <View style={styles.detailsView}>
            <Text style={styles.winsText}>{'Wins'}</Text>
            <View style={styles.scoreView}>
              <CommonButton text={'-'} onPress={() => updatePlayerTwoScore('sub')} />
              <TextInput
                name={'player2Score'}
                value={props.playerTwoWins.toString()}
                onChangeText={() => { }}
                style={styles.score}
              />
              <CommonButton text={'+'} onPress={() => updatePlayerTwoScore('add')} />
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View>
          <View style={styles.bottomRow}>
            <Text style={styles.results}>{'Current Winner:'}</Text>
            <Text style={styles.results}>{winner?.name ?? ''}</Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.results}>{'Win Difference:'}</Text>
            <Text style={styles.results}>{winner?.difference ?? 0}</Text>
          </View>
          
        </View>
        <TouchableOpacity onPress={() => onContinue()} style={[styles.button, {alignSelf: 'center'}]}  >
          <Text style={styles.buttonText} >
            {'Save'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
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
  updatePlayerOneWins: (value) => dispatch(CommonActions.updatePlayerOneWins(value)),
  updatePlayerTwoWins: (value) => dispatch(CommonActions.updatePlayerTwoWins(value)),
  updatePlayerOneName: (value) => dispatch(CommonActions.updatePlayerOneName(value)),
  updatePlayerTwoName: (value) => dispatch(CommonActions.updatePlayerTwoName(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);