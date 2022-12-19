/*var topic = 'HTML'; */
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random()* topics.length)];

/*
//Loops are for repeating over a task over and over again and iterate over an array.
for(var x = 0; x < topics.length; x++){
    console.log(topics[x])
}
 //Conditional: To make a decision about a piece of code
if(topic === 'HTML'){
    console.log('Lets study HTML')
} else if (topic === 'CSS'){
    console.log('Lets stidy CSS')
} else if (topic === 'Git'){
    console.log('Lets study Git')
} else if (topic === 'Javascript'){
    console.log('Lets study JavaScript')
} else { console.log('Please try again')}; */

//Functions dont auto execute in Java, must be called by name
function listTopics(){
    for(var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
};

function selectTopics(){
    if(randomTopic === 'HTML'){
        console.log('Lets study HTML')
    }else if(randomTopic === 'CSS'){
        console.log('Lets study CSS')
    } else if(randomTopic === 'JavaScript'){
        console.log('Lets study JavaScript')
    } else if(randomTopic === 'Git'){
        console.log('Lets study Git')
    } else { console.log('Please try again')}
    
}
console.log('Here are the topics we learned through prework');
listTopics();
console.log('Which topics should we study first');
selectTopics();