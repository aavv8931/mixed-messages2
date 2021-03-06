const feelings = ["happy", "sad", "angry", "motivated", "dissapointed", "crazy", "hopefull"]
const predictions = ["He will be too intent on doing anything. Relax and allow your intuition to give you the answer. A friend could be a nuisance. Happiness in love.", "He will be too extravagant in his spending. Be careful with that attitude. Unexpected advances at work will lead to a reappraisal.", "Possible small domestic problems in the morning. At work, be careful. You may be a victim of scams. Favorable night for love.", "Be wary of those who want to take advantage of financial matters. In the morning you will be introverted. Later your ingenuity will lead to job successes.", "Today the interruptions would be of a pleasant nature but they will not allow you to do everything you want at work. Fulfill your obligations.", "Not everything you hear today will be true. A relative will ask you for help. His great energy will make this day excellent at work. Your finances increase.",
"Be careful that money does not become a bone of contention with a close friend. A sudden walk will amuse him. Love comes unexpectedly.", "Carefully investigate job offers since on this day everything will be as it seems. Not good for shopping. An outing will do you a world of good.", "Try not to let your personal life interfere with what you have to do at work. Once you finish your work obligations you will be able to have a social life.",
"Office politics could be the cause of an unpleasant situation today. Home activities will give you more satisfaction than social life.", "Try not to feel blue. You may not be sure what a loved one expects of you. Progress on a task. Make home life."]


const horoscope = () => {
    let randomFeeling = Math.floor(Math.random() * 7);
    let randomPred = Math.floor(Math.random() * 11);
    let feel;
    let dailyPrediction;
    let mixedMessage;
    
    for(let i = 0; i < feelings.length; i++){
        feel = feelings[randomFeeling]

        for(let j =0; j < predictions.length; j++){
            dailyPrediction = predictions[randomPred]
        }
    }
    return mixedMessage = `You are feeling ${feel}; and your daily horoscope is: ${dailyPrediction}`
}

console.log(horoscope())
