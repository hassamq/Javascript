const tweetform = document.querySelector("#tweetform");
const tweet_container =document.querySelector("#container");
 tweetform.addEventListener("submit",(e)=>
{
    
  alert("submit");
  e.preventDefault();
  const username_Input=tweetform.elements.username.value;
  const tweet_Input=tweetform.elements.tweet.value;
  add_tweet(username_Input,tweet_Input);
  username_Input.value=null;
  tweet_Input.value=null;

  
  
  
}

   );


   const add_tweet=(username,tweet)=>{
    const newtweet=document.createElement('li');
    const btag=document.createElement('b');
    btag.append(username);
    newtweet.append(btag);
    newtweet.append("_"+tweet);
  
    tweet_container.append(newtweet);
   }


   //delegation
   tweet_container.addEventListener("click",(e)=>{
      e.target.nodeName==="LI" && e.target.remove();
   });