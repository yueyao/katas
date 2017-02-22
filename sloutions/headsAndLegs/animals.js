/**
 *  animls

 Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

 “A farm contains chickens and cows. There are x legs and y heads. How many chickens and cows are there?”

 Where x <= 1000 and y <=1000

 Task

 Assuming there are no other types of animals, work out how many of each animal are there.

 Return a tuple in Python - (Heads, Legs) and an array list - [Heads, Legs]/{Heads, Legs} in all other languages

 If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases).

 */
const animals = (heads, legs) => {

    /**
     // 4cow + 2chi = legs
     // 2cow + 2chi = 2heads
     // ----------------------
     // 2cow = legs - 2(heads)
     */
    const cows = legs/2 - heads;
    const chickens = heads - cows;

    if (legs & 1 || chickens > heads || cows > heads)
        return "No solutions";
    else
        return [chickens, cows];
};

export default animals;