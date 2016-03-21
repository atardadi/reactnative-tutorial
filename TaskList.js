import React  from 'react-native';
import TaskRow from './TaskRow/Component';

const {
  View,
  ListView,
  TouchableHighlight,
  Text
} = React;

const styles = React.StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#D4D4D4',
    flex: 1,
    justifyContent: 'flex-start'
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    margin: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600'
  }  
});

class TaskList extends React.Component {
  constructor(props, context){
    super(props,context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };
  }

  renderRow(todo) {
    return (
      <TaskRow 
        todo={todo}
        onDone={this.props.onDone}
      ></TaskRow>
    );
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
    this.setState({ dataSource });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView 
          dataSource={this.state.dataSource}
          key={this.props.todos}
          renderRow={this.renderRow.bind(this)}
          />
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.onAddStarted}>
          <Text style={styles.buttonText}>Add one</Text>
        </TouchableHighlight>
      </View>
      
    );
  }
}

TaskList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onAddStarted: React.PropTypes.func.isRequired,
  onDone: React.PropTypes.func.isRequired,
};


export default TaskList;
