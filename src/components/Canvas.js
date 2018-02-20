import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pathGenerator, arrayify } from '../graphix/utils'
import { toggleDataset } from '../actions';

const height = 450;
const width = 1000;

const isDataSelected = (data) => {
    let result = false;
    data.forEach((dataset) => {
        if(dataset.selected){
            result = true;
        }
    })
    return result;
}

const styles = {
    Canvas: {
        color: '#999999',
        borderColor: '#000000',
        borderWidth: 1,
        margin: '1vh',
        padding: '1vh',
        fontSize: '11px',
        backgroundColor: '#222222',
        borderRadius: '1vh',
        height: '72vh',
        width: '76vw',
        boxShadow: '0 0 1em #111111',
        float: 'right', 
    }
}


export class Canvas extends React.Component {
  render(){
    console.log('NOW, Canvas.render is fired. Next, this.props.data is tested')
    
    if(!this.props.data || !isDataSelected(this.props.data) ) {
        return(
            <div style={styles.Canvas}>
                <p>No data selected</p>
            </div>
        )
    } else {

        return( //<p> data already loaded </p>
            <div style={styles.Canvas}>
                <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" >
                    {this.props.data.map((dataset, index) => {
                        if(dataset.selected){
                            return(
                                <polyline 
                                    fill="none" 
                                    stroke="#FFFFFF80" 
                                    stroke-width="3"
                                    points={dataset.rowData.map((element) => {return [element[0]*100-800, height-element[1]*10]})} 
                                    key={index}
                                    onClick={() => this.props.onPolylineClick(dataset.rowMeta.id)}/>
                        ) }
                        
                    
                        //onClick={(id) => this.props.onSelectorClick(id)} 
                        //style={dataset.selected? styles.selected : styles.unselected}
                         
                    })}
                </svg>
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
        onPolylineClick: (id) => {
            dispatch(toggleDataset(id))
        }
    }
}

Canvas = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Canvas)

//Canvas.propTypes = {
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

export default Canvas;