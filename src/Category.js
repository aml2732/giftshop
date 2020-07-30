import React, { Component } from 'react';

import {useParams} from 'react-router-dom'

class Category extends Component{
  render(){
    return (<div>
        <h2 className="text-capitalize">{this.props.categoryId}</h2>
        placeholder for products that have category:  {this.props.categoryId}
      </div>)
  }
}

function GetCategoryId(){
  const {id} = useParams();
  return (<div><Category categoryId={id}/></div>);
}

export default GetCategoryId;
