import React from 'react-native';

const {
  Text,
  View
} = React;

const styles = React.StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  }
})

class TaskRow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>
      </View>
      
    );
  }
}

TaskRow.propTypes = {
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired
  }).isRequired
};

export default TaskRow;