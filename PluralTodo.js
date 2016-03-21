import React from 'react-native';

let {
  AppRegistry,
  Component,
  Navigator,
  Text
} = React;
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ]
    };
  }
  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onCancel() {
    this.nav.pop();
  }

  onAdd(task) {
    console.log('the task', task);
    this.state.todos.push({task});
    this.setState({ todos: this.state.todos });
    this.nav.pop();
  }

  onDone(todo) {
    console.log('Completed',todo);
    const filteredTodos = 
      this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo;
      });

    this.setState({todos: filteredTodos});
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return <TaskForm
          onAdd={this.onAdd.bind(this) }
          onCancel={this.onCancel.bind(this)}/> 
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        ref={((nav) => this.nav = nav)}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}


export default PluralTodo;
