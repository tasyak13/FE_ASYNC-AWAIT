'use strict';

//1

async function nameOfUser() {

try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();
    console.log(user.name);
  } catch(err) {
    console.log(err); 
  }
};

nameOfUser();

//2

async function postsOfUser() {

try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
        let user = await response.json();
        let quantityPosts = 0;
        for(let i = 0; i < user.length; i++) {
            quantityPosts = quantityPosts + 1;
        }
        console.log(await quantityPosts);
      } catch(err) {
        console.log(err); 
      }
    };
    
postsOfUser();

//3

async function comment(number) {

    let id = number;

try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    let user = await response.json();

    console.log(await user);
    } catch(err) {
    console.log(err); 
    }
};
            
comment(2); 