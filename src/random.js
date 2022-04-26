/** Choose a random number based on the length of messages */

function randIdx(messages) {
  return Math.floor(Math.random() * messages.length);
}

export default randIdx;
