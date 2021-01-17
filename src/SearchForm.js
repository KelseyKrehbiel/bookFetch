import React from 'react';

//Search field with button
//Print Type menu selection
//Book Type menu selection

const APIKey = "AIzaSyCxiACOeV_8l43G3P5R1Pt6DPXxbqtlbb4";

//"https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=APIKey"

/* function fetchBooks(title,printType,bookType){
  //call api. search for book by title
  //store results in state
  searchURL = `https://www.googleapis.com/books/v1/volumes?q=${title}`

  fetch(searchURL, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    

} */


function SearchForm(props){

  return(
    <form>
      "Search form"
      {/*search field*/}
      {/*Print menu */}
      {/*Book type menu */}

    </form>
  )

}

export default SearchForm;