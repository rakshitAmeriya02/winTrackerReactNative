import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale from '../../utils/Scale';
const { width, height } = Dimensions.get('screen');


export default StyleSheet.create({
  Container: { flex: 1, alignItems: 'center' },
  playerName: { fontSize: 18, fontWeight: '500' },
  button: { marginVertical: 20, padding: 15, backgroundColor: 'powderblue', borderRadius: 10 },
  buttonText: { fontSize: 14, fontWeight: '500' },
  playerDetails: { fontSize: 18, fontWeight: '500', marginHorizontal: 20 },
  detailsView: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20 },
  winsText: { fontSize: 16, fontWeight: '500' },
  results: { fontSize: 16, fontWeight: '300' },
  scoreView: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
  score: { width: 20, marginHorizontal: 10, alignSelf: 'center', marginRight: 0 },
  divider: { borderWidth: 1, borderColor: 'gray' },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50, marginVertical: 10 },
});