//asynchronous function to simulate data fetching for userprofiles

async function fetchUserProfiles (){ 
  const response = await fetch ('/userprofiles');
  const userprofiles = response.json
  console.log(userprofiles)
}

//asynchronous function to simulate data fetching for posts

async function fetchPosts (){ 
  const response = await fetch ('/posts');
  const posts = response.json
  console.log(posts)
}

//asynchronous function to simulate data fetching for comments

async function fetchComments (){ 
  const response = await fetch ('/comments');
  const comments = response.json
  console.log(comments)
}

//Sequential data fetching using then 

let promise = new Promise ((resolve, reject) => {resolve();

}); 

promise.then(result => { 
  result = fetch ('/userprofiles');
  return result;}).then(result => {
    result = fetch ('/posts');
    return result;}).then(result => {
      result = fetch ('/comments');
      return result;
    });
 
 //Parallel data fetching

 Promise.all ([fetchUserProfiles, fetchPosts, fetchComments]).then((values) => {console.log(values)});

 //Refactoring with await
 
async function sequentialFetching () {
  try {
  const response1 = await fetch ('/userprofiles');
  if (!response1.ok){
    throw new Error('HTTP error: ${response1.status}');
  }
    const userprofiles = response1.json();
    console.log(userprofiles);

    const response2 = await fetch ('/posts');
  if (!response2.ok){
    throw new Error('HTTP error: ${response2.status}');
  }  
    const posts = response2.json();
    console.log(posts);

    const response3 = await fetch ('/comments');
  if (!response3.ok)  {
    throw new Error('HTTP error: ${response3.status}');
  }
    const comments = response3.json();
    console.log(comments);}
    catch (error){
      console.log("Could not get the information: ${error}");
      throw error;
    }
}

// Modifying functions with error handling (try and catch)

async function fetchUserProfiles (){
  try {
    const response = await fetch ('/userprofiles');
    if (!response.ok){
      throw new Error('Failed to fetch user profiles');
    }
    const userprofiles = response.json();
    return userprofiles;
} catch (error){
  console.log('Failed to fetch user profiles');
}};

async function fetchPosts () {
  try {
    const response = await fetch ('/posts');
    if (!response.ok){
      throw new Error('Failed to fetch posts');
    }
    const posts = response.json();
    return posts;
  } catch (error){
    console.log('Failed to fetch posts');
  }
};

async function fetchComments () {
  try {
    const response = await fetch ('/comments');
  if (!response.ok){
    throw new Error('Failed to fetch comments');
  }  
    const comments = response.json();
    return comments;
} catch (error){
  console.log('Failed to fetch comments');
}
};

// Chaining the async functions together

function getUserContent(){

  fetchUserProfiles;
  console.log("User Profile retrieved");
  fetchPosts;
  console.log("Posts retrieved");
  fetchComments;
  console.log("Comments retrieved");

}

getUserContent;