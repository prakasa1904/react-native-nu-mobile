import React from 'react'
import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
	position: {
		justifyContent : 'flex-start',
		alignItems:  'center',
	},

	imageLogo:{
		width: 200,
		height: 200,
		justifyContent:'center',
		alignItems:'center',
	},

	rowOne:{
		marginTop: 10,
		flexDirection:'row',
		flex: 1,
	},

	rowOther:{
		marginTop: 90,
		flexDirection:'row',
		flex: 1,
	},

	imageContent:{
		width: 100,
		height: 100,
	}

});

export default styles
