(this["webpackJsonpmovie-favorites"]=this["webpackJsonpmovie-favorites"]||[]).push([[0],{17:function(e,t,i){},18:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var r=i(2),o=i.n(r),a=i(9),c=i.n(a),n=(i(17),i(18),i(12)),s=i(6),l=i(10),d=i(11),j=i(1);function u(e){var t=e.title,i=e.posterUrl,r=e.movieId,o=e.disableFavoriting,a=(e.setWhatever,e.addFavoriteMovie),c=e.favorited;return Object(j.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"auto",justifyContent:"center"},children:[Object(j.jsx)("div",{className:"grid-item",children:Object(j.jsx)("img",{alt:"moviePoster",width:300,height:455,src:"N/A"!==i?i:"https://www.popcorn.app/assets/app/images/placeholder-movieimage.png"})}),Object(j.jsx)("div",{className:"grid-item",children:Object(j.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"auto"},children:[Object(j.jsx)("p",{style:{justifySelf:"center"},children:t}),Object(j.jsxs)("button",{disabled:o,onClick:function(){return a(r)},className:"favorite-button",children:[Object(j.jsx)(l.a,{style:c?{color:"red",border:"none"}:{color:"transparent",stroke:"black",strokeWidth:"25px"},icon:d.a}),"    Favorite"]})]})})]})}function v(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),i=t[0],o=t[1],a=Object(r.useState)(""),c=Object(s.a)(a,2),l=c[0],d=c[1],v=Object(r.useState)([]),f=Object(s.a)(v,2),b=f[0],h=f[1];function m(e){h((function(t){return[].concat(Object(n.a)(t),[e])}))}return Object(r.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("favoritedMovies"));e&&h(e)}),[]),Object(r.useEffect)((function(){b.length&&window.localStorage.setItem("favoritedMovies",JSON.stringify(b))}),[b]),Object(r.useEffect)((function(){l&&fetch("https://www.omdbapi.com/?s=".concat(l,"&type=movie&apikey=a3e71b30")).then((function(e){return e.json()})).then((function(e){e.Search&&o(e.Search)}))}),[l]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h2",{children:"Movie favorites"}),b.length>=5&&Object(j.jsx)("h3",{children:"You have already favorited 5 movies. You can't favorite anymore :("}),Object(j.jsx)("p",{children:"Search for movies and select your favorites!"}),Object(j.jsx)("label",{htmlFor:"movie-search",className:"margin-right-10",children:"Search for a movie"}),Object(j.jsx)("input",{value:l,onChange:function(e){return d(e.currentTarget.value)},id:"movie-search"}),i.map((function(e){var t=e.imdbID,i=e.Title,r=e.Poster;return Object(j.jsx)(u,{title:i,posterUrl:r,movieId:t,disableFavoriting:b.length>=10,addFavoriteMovie:m,favorited:b.includes(t)},t)}))]})}var f=function(){return Object(j.jsx)(v,{})};c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7cefac23.chunk.js.map