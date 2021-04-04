This is becoming increasingly informative and amazing.

https://movie-favorites.herokuapp.com/

https://docs.google.com/document/d/1ZsagXrhmPSKSknKL1cMLDZql0xp73zwWlElXD-nGI68/edit

The goal is to build an application that will allow people to search movies, see information about movies, and save their favorite movies.

As an extension, you can also allow people to see the favorites of other users.
The Challenge

We need a webpage that can search for movies, and allow the user to save their favourite films. You should limit the number of favorite films to 10 – after this, they can only add a new favorite after removing one that already exists.

You do not need to persist the favorite movies in a database and can instead store the information in the browser. However if a user refreshes the page, they should be able to see their previously selected favorites (assuming they do not clear the browser history/storage).

We'd like a user interface that makes it easy to:

- [x] Search the movie database and display the results (movies only)
- [x] Add a movie from the search results to their favorites list
- [ ] View the list of up to 10 films already favorited
- [ ] Remove a favorite movie from the list

Requirements

- [ ] Search results should come from an online database for movie information (OMDB's API is a good option but you can use another API if you prefer)
- [ ] Each search result should list at least its title, year of release and a button to favorite that film.
- [ ] Updates to the search terms should update the result list
- [ ] Ideally this would happen without a full page reload
- [ ] Movies in search results can be added and removed from the favorites list.
- [ ] If a search result has already been favorited, display this and disallow adding it as a favorite again
- [ ] Display some kind of banner/notification when users have favorited 10 movies letting them know they cannot add a new one until they remove one. This banner should be hidden if they remove a favorite and then have less than 10 selected.

[Optional but recommended]

- [ ] Allow people to see the favorites of other users
- [ ] you would need to introduce the concept of users
- [ ] you would also have to persist the favorites information in some kind of persisted data store (a database, Redis, something else of your choosing)
- [ ] This would likely require you to add a backend to your application if you did not do so initially

Extras
Beyond what is described above, you can add additional features if there are things you think would be valuable. For example, perhaps you autocomplete the movie names when a person is searching or allow users to ‘follow’ other users and then easily access the favorites of those people. Feel free to also improve the user interface and design, for example adding nicer transitions and animations. You can also add tests to help you avoid regressions.

Submission

Please submit the following by emailing your Hackbright education team. You can send the Github link and include the other information there in the README.
A link to your deployed code so we can test it (A few free hosting options: Heroku, Github pages, Netlify)
A link to your Github repository containing the code
Any other notes you'd like us to consider including design decisions you made, a feature list, usability instructions, etc.
