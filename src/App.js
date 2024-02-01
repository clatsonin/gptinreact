import './App.css';
import React, { useState } from 'react';
import sendMsgToOpenAI from './openai';

function App() {
  const[input, setInput] = useState("");

  const handleSend = async () =>{
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }
  return (
    <div className="App">
      <div className="main">
        <div className="chats">
          <div className="chat">
            <p className="txt">Loreu mufjj kjjdfkl mdjkjfs</p>
          </div>
          <div className="chat bot">
            <p className="txt">The role of a Prime Minister in any nation is pivotal, representing the highest executive authority and leadership. Tasked with overseeing the governance of a country, a Prime Minister holds significant responsibilities ranging from policy-making to diplomatic representation, and from economic management to national security. Serving as the head of government, the Prime Minister works closely with their cabinet and legislative bodies to formulate and implement laws and policies that reflect the interests and aspirations of the populace. They often act as the face of the nation on the international stage, engaging in diplomacy, negotiations, and fostering relationships with other countries. The effectiveness and impact of a Prime Minister can shape the trajectory of a nation, influencing its socio-political landscape, economic prosperity, and global standing. In times of crisis or stability, the Prime Minister's leadership is scrutinized, as they navigate challenges, harness opportunities, and guide the country towards its envisioned future. Ultimately, the role demands a combination of astute political acumen, strategic vision, and a steadfast commitment to serving the best interests of the nation and its people.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Enter your prompt" value= {input} onChange = {(e) => {setInput(e.target.value)}}/>
            <button className="send" onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
