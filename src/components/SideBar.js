import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDatasets, toggleDataset } from '../actions';
import { DataSelector } from './DataSelector';

const styles = {
    selected: {
        borderColor: 'black',
        backgroundColor: 'grey',
    },
    unselected: {
        borderColor: 'black',
        backgroundColor: 'white'
    },
}

/*
const CommentList = ({ comments, onCommentClick }) => (
  <ul>
    {comments.map((comment, index) => (
      <Comment key={index} {...comment} onClick={() => onCommentClick(index)} />
    ))}
  </ul>
)
*/


export class SideBar extends React.Component {
  constructor(props){
      super(props);
      this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  componentDidMount() {
      this.props.loadData();
  }

  render(){
    if(this.props.isFetching) {
        return(
            <p>Data currently loading</p>
        )
    } else {
        return( <p> data already loaded </p>
            //<ul>
            //    {this.props.data.map((dataset, index) => (
            //        <DataSelector 
            //            key={index} 
            //            {...dataset}
            //            onClick={() => this.props.toggleDataset(dataset.id)} 
            //            style={dataset.selected? styles.selected : styles.unselected}
            //        />
            //    ))}
            //</ul>
        )
    }
  }

}

const mapStateToProps = (state, ownProps) => {
    return {
      data: state.data,
      isFetching: state.isFetching,
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

SideBar = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)

//SideBar.propTypes = {
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

export default SideBar;