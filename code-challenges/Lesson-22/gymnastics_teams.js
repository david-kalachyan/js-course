/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
const dolphins_score_1 = 96
const dolphins_score_2 = 108
const dolphins_score_3 = 89

const koalas_score_1 = 88
const koalas_score_2 = 91
const koalas_score_3 = 110
*/

/*
const dolphins_score_1 = 97
const dolphins_score_2 = 112
const dolphins_score_3 = 101

const koalas_score_1 = 109
const koalas_score_2 = 95
const koalas_score_3 = 123
*/


const dolphins_score_1 = 97
const dolphins_score_2 = 112
const dolphins_score_3 = 101

const koalas_score_1 = 109
const koalas_score_2 = 95
const koalas_score_3 = 123


const dolphins_average = (dolphins_score_1 + dolphins_score_2 + dolphins_score_3) / 3
const koalas_average = (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3

if (dolphins_average > koalas_average && dolphins_average >= 100) {
    console.log(`Dolphins team is winner (${dolphins_average} > ${koalas_average}) !`)
} else if (dolphins_average < koalas_average && koalas_average >= 100) {
    console.log(`Koalas team is winner (${koalas_average} > ${dolphins_average}) !`)
} else if (dolphins_average === koalas_average && dolphins_average >= 100 && koalas_average >= 100) {
    console.log(`Draw! Koalas ave: ${koalas_average}, Dolphins ave: ${dolphins_average}`)
} else {
    console.log(`No one wins! Koalas ave: ${koalas_average}, Dolphins ave: ${dolphins_average}`)
}




