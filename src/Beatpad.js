import React from 'react';
import './Beatpad.css'; // Assuming you have a corresponding CSS file

class BeatPad extends React.Component {
//   playAudio = (audioId) => {
//     const audio = document.getElementById(audioId);
//     audio.play();
//   }

  currentAudio = null;
 clickQueue = []; // Array to store the order of button presses

 keyMappings = {
  q: "audio1",
  w: "audio2",
  e: "audio3",
  r: "audio4",
  u: "audio5",
  i: "audio6",
  o: "audio7",
  p: "audio8",
  a: "audio9",
  s: "audio10",
  d: "audio11",
  f: "audio12",
  h: "audio13",
  j: "audio14",
  k: "audio15",
  l: "audio16",
};

// Event listener for key presses
componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (this.keyMappings.hasOwnProperty(key)) {
      const audioId = this.keyMappings[key];
      this.playAudio(audioId);
    }
  }

playAudio(audioId) {
  var audio = document.getElementById(audioId);
  // Add the clicked audio ID to the queue
  this.clickQueue.push(audioId);
  // If no audio is currently playing, start playing the next audio in the queue
  if (!this.currentAudio) {
    this.playNextInQueue();
  }
}

 playNextInQueue = () => {
  // If there are items in the queue, play the next audio
  if (this.clickQueue.length > 0) {
    var nextAudioId = this.clickQueue.shift(); // Get the first item in the queue
    var nextAudio = document.getElementById(nextAudioId);
    this.currentAudio = nextAudio;

    // When the current audio finishes playing, play the next audio in the queue
    this.currentAudio.onended = function () {
      this.currentAudio = null;
      this.playNextInQueue();
    };

    // Play the next audio
    nextAudio.play();
    this.displayDuration(nextAudioId); // Call function to display duration
  }
}
formatTime = (seconds) => {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
  }

 displayDuration(audioId) {
  var audio = document.getElementById(audioId);
  var durationElement = document.createElement("span");
  durationElement.textContent = " (" + this.formatTime(audio.duration) + ")";
  document.getElementById(audioId).parentNode.appendChild(durationElement);
}

 


render() {
    return (
      <div className="grid">
        <div className="square audio1" id="square1" onClick={() => this.playAudio('audio1')}>Beat 1 (Q)</div>
        <div className="square audio2" id="square2" onClick={() => this.playAudio('audio2')}>Beat 2</div>
        <div className="square audio3" id="square3" onClick={() => this.playAudio('audio3')}>Beat 3</div>
        <div className="square audio4" id="square4" onClick={() => this.playAudio('audio4')}>Beat 4</div>
        <div className="square audio5" id="square5" onClick={() => this.playAudio('audio5')}>Sub-bass 1</div>
        <div className="square audio6" id="square6" onClick={() => this.playAudio('audio6')}>Sub-bass 2</div>
        <div className="square audio7" id="square7" onClick={() => this.playAudio('audio7')}>Sub-bass 3</div>
        <div className="square audio8" id="square8" onClick={() => this.playAudio('audio8')}>Sub-bass 4</div>
        <div className="square audio9" id="square9" onClick={() => this.playAudio('audio9')}>Square 9</div>
        <div className="square audio10" id="square10" onClick={() => this.playAudio('audio10')}>Square 10</div>
        <div className="square audio11" id="square11" onClick={() => this.playAudio('audio11')}>Square 11</div>
        <div className="square audio12" id="square12" onClick={() => this.playAudio('audio12')}>Square 12</div>
        <div className="square audio13" id="square13" onClick={() => this.playAudio('audio13')}>Square 13</div>
        <div className="square audio14" id="square14" onClick={() => this.playAudio('audio14')}>Square 14</div>
        <div className="square audio15" id="square15" onClick={() => this.playAudio('audio15')}>Square 15</div>
        <div className="square audio16" id="square16" onClick={() => this.playAudio('audio16')}>Square 16</div>

        <audio id="audio1" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Drum Loops/Freeze 1-Drum Rack [2022-10-15 095511].wav"></audio>
        <audio id="audio2" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Drum Loops/Freeze 1-Drum Rack [2022-10-15 095544].wav"></audio>
        <audio id="audio3" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Drum Loops/Freeze 1-Drum Rack [2022-10-15 095607].wav"></audio>
        <audio id="audio4" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Drum Loops/Freeze 1-Drum Rack [2022-10-15 095617].wav"></audio>
        <audio id="audio5" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Sub-Bass Loops/Freeze 9-3 OP Boom [2022-10-15 095516].wav"></audio>
        <audio id="audio6" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Sub-Bass Loops/Freeze 9-3 OP Boom [2022-10-15 095544].wav"></audio>
        <audio id="audio7" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Sub-Bass Loops/Freeze 9-3 OP Boom [2022-10-15 095607].wav"></audio>
        <audio id="audio8" src="/PROJECT STEMS/TRUVONNE STEMS for Class 2022-2023/Sub-Bass Loops/Freeze 9-3 OP Boom [2022-10-15 095617].wav"></audio>
        <audio id="audio9" src="audio9.mp3"></audio>
        <audio id="audio10" src="audio10.mp3"></audio>
        <audio id="audio11" src="audio11.mp3"></audio>
        <audio id="audio12" src="audio12.mp3"></audio>
        <audio id="audio13" src="audio13.mp3"></audio>
        <audio id="audio14" src="audio14.mp3"></audio>
        <audio id="audio15" src="audio15.mp3"></audio>
        <audio id="audio16" src="audio16.mp3"></audio>
      </div>
    );
  }
}

export default BeatPad;