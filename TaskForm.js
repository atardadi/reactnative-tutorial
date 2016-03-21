import React from 'react-native';


const {
  View,
  TouchableHighlight,
  Text,
  TextInput
} = React;

const styles = React.StyleSheet.create({
  container: {
    paddingTop: 150,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start'
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7', 
    height: 50,
    marginLeft: 10,
    padding: 15,
    borderRadius: 3
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    margin: 10,
    backgroundColor: '#05A5D1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 18,
    fontWeight: '600'
  },
  cancelButton: {
    backgroundColor: '#666'
  }
});

class TaskForm extends React.Component {
  constructor(props, context){
    super(props,context);
   
  }

  onChange(text) {
    this.task = text;
  }

  onAddPresses() {
    this.props.onAdd(this.task);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          onChangeText={this.onChange.bind(this)}
          />
        <TouchableHighlight style={styles.button}
          onPress={this.onAddPresses.bind(this)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.cancelButton]}
          onPress={this.props.onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
      
    );
  }
}

TaskForm.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  onAdd: React.PropTypes.func.isRequired,
};


export default TaskForm;

