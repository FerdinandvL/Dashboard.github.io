import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDatasets, toggleDataset } from '../actions';
import { DataSelector } from './DataSelector';

const styles = {
    selected: {
        color: '#999999',
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#444444',
        borderRadius: '0.5vh',
        boxShadow: '0 0 1em #111111',
        padding: '0.7vh',
        margin: '0.7vh',
        textShadow: '0 0 0.5em black'
    },
    unselected: {
        color: '#999999',
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#222222',
        borderRadius: '0.5vh',
        boxShadow: '0 0 1em #050505',
        padding: '0.7vh',
        margin: '0.7vh',
        textShadow: '0 0 0.5em black'
    },
    SideBar: {
        position: 'absolute',
        left: 0,
        borderColor: '#000000',
        borderWidth: 1,
        margin: '1vh',
        padding: '1vh',
        fontSize: '11px',
        backgroundColor: '#222222',
        borderRadius: '1vh',
        float: 'left',
        height: '72vh',
        width: '20vw',
        boxShadow: '0 0 1em #111111', 
    },
    DataSelector: {
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#222222',
        borderRadius: '0.5vh',
        float: 'left',
        boxShadow: '0 0 1em #111111',
    }
}


export class SideBar extends React.Component {
  constructor(props){
      super(props);
      this.componentWillMount = this.componentWillMount.bind(this);
  }
  
  componentWillMount() {
      this.props.loadData();
  }

  render(){
    console.log('NOW, SideBar.render is fired. Next, this.props.data is tested')
    if(!this.props.data) {
        return(
            <div style={styles.SideBar}>
                <p>Data currently loading</p>
            </div>
        )
    } else {
        return( //<p> data already loaded </p>
            <div style={styles.SideBar}>
                <div style={styles.selected}>This is the Selector Head</div>
                {this.props.data.map((dataset, index) => (
                    <DataSelector 
                        key={index}
                        id={dataset.rowMeta.id} 
                        {...dataset}
                        onClick={(id) => this.props.onSelectorClick(id)} 
                        style={dataset.selected? styles.selected : styles.unselected}
                    />
                ))}
            </div>
        )
    }
  }

}

const mapStateToProps = (state, ownProps) => {
    return {
      data: state.dataStorage.data,
      isFetching: state.fetchIndicating.isFetching,
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