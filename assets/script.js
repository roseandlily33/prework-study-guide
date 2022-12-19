var topic = 'HTML';
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];


//Loops are for repeating over a task over and over again and iterate over an array.
for(var x = 0; x < topics.length; x++){
    console.log(topics[x])
}
 //To make a decision about a piece of code
if(topic === 'HTML'){
    console.log('Lets study HTML')
} else if (topic === 'CSS'){
    console.log('Lets stidy CSS')
} else if (topic === 'Git'){
    console.log('Lets study Git')
} else if (topic === 'Javascript'){
    console.log('Lets study JavaScript')
} else { console.log('Please try again')};