(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),s=(i(16),i(11)),r=i(4),l=i(5),c=i(7),o=i(6),m=i(1),d=i.n(m),h=(i(17),i(2)),b=(i(18),i(19),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i||"<no description>",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:n,children:"IMDB"})]})]})]})},u=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(j,Object(h.a)({},e),e.imdbId)}))})},p=i(3),g=(i(21),function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movie:{title:"",description:"",imgUrl:"https://_imgUrl_",imdbUrl:"https://www.imdb.com/title/_imdbId_",imdbId:""},isValid:{title:"",imgUrl:!0,imdbUrl:!0,imdbId:!0}},e.handleChange=function(t){var i=t.target,a=i.name,n=i.value;e.setState((function(e){return{movie:Object(h.a)(Object(h.a)({},e.movie),{},Object(p.a)({},a,n))}}))},e.setValidation=function(t,i){e.setState((function(e){return{isValid:Object(h.a)(Object(h.a)({},e.isValid),{},Object(p.a)({},t,i))}}))},e.validateInput=function(t,i){switch(t){case"imgUrl":e.setValidation(t,/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(i));break;case"imdbUrl":e.setValidation(t,/https:\/\/www\.imdb\.com\/title\/[a-z]{2,}\d+/.test(i));break;case"title":e.setValidation(t,i.length>=4);break;case"imdbId":e.setValidation(t,/^[a-z]{2,}\d+$/.test(i))}},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this,t=this.state.movie,i=t.title,a=t.description,n=t.imgUrl,s=t.imdbUrl,r=t.imdbId,l=this.state.isValid,c=l.title,o=l.imdbId,m=l.imdbUrl,d=l.imgUrl,h={title:"",description:"",imgUrl:"_imgUrl_",imdbUrl:"https://www.imdb.com/title/_imdbId_",imdbId:""},j={border:"2px solid #9b2226",borderRadius:"5px"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{method:"POST",className:"new-movie-form",onSubmit:function(t){t.preventDefault(),e.props.addMovie(e.state.movie),e.setState({movie:h})},children:[Object(b.jsx)("p",{className:"new-movie-form__title",children:"To add new movie, fill in data below:"}),Object(b.jsx)("input",{required:!0,className:"new-movie-form__input",style:c?{}:j,type:"text",placeholder:"title",name:"title",value:i,onChange:this.handleChange,onBlur:function(t){e.validateInput(t.target.name,t.target.value)}}),!c&&Object(b.jsx)("p",{className:"error-text",children:"Title should be 4+ chars"}),Object(b.jsx)("input",{required:!0,className:"new-movie-form__input",style:d?{}:j,type:"text",placeholder:"imgUrl",name:"imgUrl",value:n,onChange:this.handleChange,onBlur:function(t){e.validateInput(t.target.name,t.target.value)}}),!d&&Object(b.jsx)("p",{className:"error-text",children:"imgUrl must be a valid url"}),Object(b.jsx)("input",{required:!0,className:"new-movie-form__input",style:m?{}:j,type:"text",placeholder:"imdbUrl",name:"imdbUrl",value:s,onChange:this.handleChange,onBlur:function(t){e.validateInput(t.target.name,t.target.value)}}),!m&&Object(b.jsx)("p",{className:"error-text",children:"imdbUrl must be a valid url"}),Object(b.jsx)("input",{required:!0,className:"new-movie-form__input",style:o?{}:j,type:"text",placeholder:"imdbId",name:"imdbId",value:r,onChange:this.handleChange,onBlur:function(t){e.validateInput(t.target.name,t.target.value)}}),!o&&Object(b.jsx)("p",{className:"error-text",children:"imdbId must meet a format: 2+ letters followed by digits"}),Object(b.jsx)("textarea",{className:"new-movie-form__input",placeholder:"description (max length 150 chars)",name:"description",maxLength:150,rows:4,value:a,onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",disabled:!Object.values(this.state.isValid).every((function(e){return!0===e})),children:"Add a movie"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("pre",{children:JSON.stringify(this.state,null,2)})]})}}]),i}(m.Component)),v=i(10),w=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(u,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(g,{addMovie:this.addMovie})})]})}}]),i}(d.a.Component);n.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.ff49e896.chunk.js.map