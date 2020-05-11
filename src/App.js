import React, { useState } from 'react';
import './App.css';
import { Navigation } from './Components/Navigation';
import { Profile } from './Components/Profile';
import { TweetForm } from './Components/TweetForm';
import { Tweet } from './Components/Tweet';

// jsx - build individual components in independent files.
// props are properties given to a component

const initialTweets = [
  {
    name: 'Newton',
    handle: '@SirIsaac',
    profile_image: 'https://i.imgur.com/73hZDYK.png',
    text: 'If I have seen further it is by standing on the shoulders of giants',
    date: '10 mins ago'
  },
  {
    name: 'Descartes',
    handle: '@rd',
    profile_image: 'https://i.imgur.com/nlhLi3I.png',
    text: 'Je pense , donc je suis',
    date: '11 mins ago'
  }
]

function App() {
  const [tweets, setTweetData] = useState(initialTweets);

  const addNewTweet = (text) => {
    const newTweet = {
      name: 'Ariane',
      handle: '@a_fairlie',
      profile_image: 'https://i.imgur.com/2WZtOD6.png',
      text,
      date: '0 mins'
    }

    setTweetData([newTweet, ...tweets]);
  }

  return (
    <div className='App'>
     <Navigation />
     <Profile />
     <TweetForm 
      addNewTweet={addNewTweet}
     />
     <section className='tweets-container'>
       {tweets.map((tweet, index) => {
         const {name, handle, profile_image, text, date} = tweet;
         return <Tweet
        //  remember to give keys to each instance of a component in a multi-component container
         key={index}
         name={name}
         handle={handle}
         profile_image={profile_image}
         text={text}
         date={date}
         />
       })}
     </section>
    </div>
  );
}

export default App;

//       <Tweet name={tweets[0].name} handle={tweets[0].handle} profile_image={tweets[0].profile_image} text={tweets[0].text} date={tweets[0].date}/>
