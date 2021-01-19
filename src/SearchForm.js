import React, { Component } from 'react';

//Search field with button
//Print Type menu selection
//Book Type menu selection

const APIKey = "AIzaSyCxiACOeV_8l43G3P5R1Pt6DPXxbqtlbb4";

//"https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=APIKey"

let fetchBooks = (title) => {
  //call api. search for book by title
  //store results in state
  console.log(title)
  const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${APIKey}`

  fetch(searchURL)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .catch(console.log("something broke"))

};


class SearchForm extends Component{
  state = {
    title:""
  }

  handleChange = (event) => {
    this.setState({title: event.target.value})
    
  }

  handleSubmit = (event) => {
    console.log(this.state.title);
    event.preventDefault();
    fetchBooks(this.state.title);
  }

  render(){

    return(
    <form>
      <label title="title">Title</label>
      <input 
      type="text" 
      id="title" 
      name="title" 
      placeholder="Permutation City" 
      required
      value = {this.state.title}
      onChange = {this.handleChange}
      >
      </input>
      <button type="submit" 
      id="submit-button" 
      name="submit-button" 
      className="center"
      onClick = {this.handleSubmit}
      >Search</button>
      {/*Print menu */}
      {/*Book type menu */}

    </form>
    )
  }

}

export default SearchForm;