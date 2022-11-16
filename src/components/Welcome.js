import React from 'react';
import { Button } from 'react-bootstrap';
import { Client } from "twitter-api-sdk";
import logo from '../logo.svg';


function Welcome() {

    const client = new Client(process.env.BEARER_TOKEN);

    async function main() {
        const tweet = await client.tweets.findTweetById("20");
        console.log(tweet.data.text);
    }


    return (
        <div className="Welcome">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button onClick={main}>Twitter API</Button>
            </header>
        </div>
    );
}

export default Welcome;