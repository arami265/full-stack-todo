import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getTodos, deleteTodo } from "../actions/todoActions";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  onDeleteClick = id => {
    this.props.deleteTodo(id);
  };

  render() {
    // Using destructuring to get items from redux state
    const { todos } = this.props.todoState;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="todo-list">
            {todos.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem key={_id}>
                  <Button
                    key={_id}
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

TodoList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todoState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todoState: state.todoState
});

export default connect(
  mapStateToProps,
  { getTodos, deleteTodo }
)(TodoList);
