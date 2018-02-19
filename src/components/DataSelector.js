import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDatasets, toggleDataset } from '../actions';



/*
const CommentList = ({ comments, onCommentClick }) => (
  <ul>
    {comments.map((comment, index) => (
      <Comment key={index} {...comment} onClick={() => onCommentClick(index)} />
    ))}
  </ul>
)
*/



export class DataSelector extends React.Component {
  render(){
    return(
      <div onClick={this.props.onSelectorClick(this.props.id)} style={this.props.style}>
          Here is dataset with id: {this.props.id} of AG: {this.props.AG}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      data: state.data
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      loadData: () => {
        dispatch(fetchDatasets())
      },
      onSelectorClick: (id) => {
        dispatch(toggleDataset(id))
      }

    }
}

DataSelector = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DataSelector)

//DataSelector.propTypes = {
//  data: PropTypes.arrayOf(
//    PropTypes.shape({
//      id: PropTypes.number.isRequired,
//      visible: PropTypes.bool.isRequired,
//      author: PropTypes.string.isRequired,
//      commenttext: PropTypes.string.isRequired,
//      commentdate: PropTypes.string.isRequired
//    }).isRequired
//  ).isRequired,
//  onCommentClick: PropTypes.func.isRequired
//}

export default DataSelector;