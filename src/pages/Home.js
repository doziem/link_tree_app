import React from 'react';
import data from '../data';
import Button from '../components/Button';
import Slack from '../image/slack.png';
import Github from '../image/github.png';

const Home = () => {
  return (
    <div className="home">
      {data.map((link, i) => (
        <Button link={link} key={i} />
      ))}
      <div className="home__social">
        <img className="slack-img" src={Slack} alt="slack" />
        <img src={Github} alt="Git hub" />
      </div>
    </div>
  );
};

export default Home;
