import React, { Component } from 'react';
import DisplayResults from './DisplayResults';

//Search field with button
//Print Type menu selection
//Book Type menu selection

const APIKey = "AIzaSyCxiACOeV_8l43G3P5R1Pt6DPXxbqtlbb4";

//"https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=APIKey"


class SearchForm extends Component{
  state = {
    title:"",
    print:"",
    book:"",
    results:[]
  }

fetchBooks = (searchTerms) => {
  //call api. search for book by title
  //store results in state
  console.log(searchTerms)
  const title = searchTerms.title;
  const printType = searchTerms.print;
  const filter = searchTerms.book

  let requestURL = `https://www.googleapis.com/books/v1/volumes?`;

  if(title.length > 0 ){
    requestURL += `q=${title}`;
  }
  if(printType.length > 0){
    requestURL += `&printType=${printType}`;
  }
  if(filter.length > 0){
    requestURL += `&filter=${filter}`;
  }
  requestURL += `&key=${APIKey}`

  console.log(requestURL);

  fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    this.setState({results: data})
  
    console.log(data);
  })
  .catch(()=>console.log("something broke"));
};

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
    console.log(this.state);
    event.preventDefault();
    this.fetchBooks(this.state);
  }

  render(){
    console.log(this.state.results)
    return(
    <div>
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
        onChange = {this.handlePrintChange}>
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
        onChange = {this.handleBookChange}>
        <option value="">ALL</option>
        <option value="ebooks">ebooks</option>
        <option value="free-ebooks">free-ebooks</option>
        <option value="full">full</option>
        <option value="paid-ebooks">paid ebooks</option>
        <option value="partial">partial</option>
      </select>

    </form>
      <DisplayResults results={this.state.results}/>
    </div>
    )
  }

}

export default SearchForm;