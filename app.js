//Init the Git class
const github = new Github;
//Init the UI class
const ui = new UI;


//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;

  //the logic will be handeled in github.js
  if(userText !== "") {
    //Make HTTP Call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          //Show alert made in ui.js
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          //Show profile from ui.js
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    //Clear the profile
    ui.clearProfile();
  }
});