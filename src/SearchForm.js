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
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(console.log("something broke"));
};


class SearchForm extends Component{
  state = {
    title:"",
    print:"",
    book:""
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value})
    
  }
  handlePrintChange = (event) => {
    this.setState({print: event.target.value})
  }
  handleBookChange = (event) => {
    this.setState({book: event.target.value})
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
      onChange = {this.handleTitleChange}
      >
      </input>
      <button type="submit" 
      id="submit-button" 
      name="submit-button" 
      className="center"
      onClick = {this.handleSubmit}
      >Search</button>
      {/*Print menu */}
      <label title="printType">Print Type</label>
      <select  
        id="printType" 
        name="printType" 
        onChange = {e => this.handlePrintChange(e.target.value)}>
        <option value="ALL" >ALL</option>
        <option value="BOOKS" >BOOKS</option>
        <option value="MAGAZINES" >MAGAZINES</option>
      </select>
      {/*Book type menu */}
      <label title="bookType">Book Type</label>
      <select 
        id="bookType" 
        name="bookType" 
        value = {this.state.book}
        onChange = {e => this.handleBookChange(e.target.value)}>
        <option value="">ALL</option>
        <option value="ebooks">ebooks</option>
        <option value="free-ebooks">free-ebooks</option>
        <option value="full">full</option>
        <option value="paid-ebooks">paid ebooks</option>
        <option value="partial">partial</option>
      </select>

    </form>
    )
  }

}

export default SearchForm;