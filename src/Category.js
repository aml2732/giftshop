import React, { Component } from 'react';
import {useParams} from 'react-router-dom'

class Category extends Component{

  constructor(props) {
    super(props);
    this.state = { error: null, isLoaded: false, category: {} };
  }

  componentDidMount() {
    fetch("/v1/category/details?linkto=/categories/"+this.props.categoryId)
      .then(res => res.json())
      .then(
        (result) => { this.setState({ isLoaded: true, category: result.category }); console.log('result', result.category) },// success handling
        (error) => {  this.setState({ isLoaded: true, error }); console.log(error) } // Error handling
      )
  }


  render(){
    let { error, isLoaded, category } = this.state;
    return (<div>
      <div style={{backgroundImage: 'linear-gradient(to top right,black, transparent), url(../'+category.imgsrc+')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height:'200px', color: 'white', position:'relative', backgroundSize: 'cover'}}>
        <h2 className="text-capitalize" style={{position:'absolute', bottom:'2rem', textAlign: 'center', width:'100%'}}>{category.name}</h2>
      </div>
        placeholder for products that have category:  {this.props.categoryId}
      </div>)
  }
}

function GetCategoryId(){
  const {id} = useParams();
  return (<div><Category categoryId={id}/></div>);
}

export default GetCategoryId;
