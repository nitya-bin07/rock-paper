let score= JSON.parse(localStorage.getItem('score'));

    if (score===null){
      score={
        wins:0,
        losses:0,
        ties: 0
      };
    }
    
    updateScoreElement();
     
    function playGame(playerMove){
           const computerMove=(pickComputerMove());
          console.log(computerMove);
          let result='';

          if(playerMove=== 'scissors'){
            if(computerMove==='rock'){
              result='you lose';
            }else if(computerMove==='paper'){
              result='you win';
            }else if (computerMove==='scissors'){
              result='tie';
             }
            }
            
          else if(playerMove==='paper'){
              if(computerMove==='rock'){
              result='you win';
            }else if(computerMove==='paper'){
              result='tie';
            }else if (computerMove==='scissors'){
              result='you lose';
            }
          }else  if(playerMove==='rock'){
                if (computerMove==='rock'){
              result='tie';
            }else if(computerMove==='paper'){
              result='you lose';
            }else if(computerMove==='scissors'){
              result='you win';
             }
            }
           
          if(result === 'you win') score.wins++;
          else if(result === 'you lose') score.losses++;
          else if(result === 'tie') score.ties++;

          localStorage.setItem('score',JSON.stringify(score));

          updateScoreElement();
     
          document.querySelector('.js-result').innerHTML=result;

          document.querySelector('.js-moves').innerHTML
          =` you
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        computer`;

          //           alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}. 
                // wins:${score.wins}, losses:${score.losses}, ties: ${score.ties}`);
          }
          
          function updateScoreElement(){
            document.querySelector('.js-score')
          .innerHTML=`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
          
          }
    function pickComputerMove(){

           let computerMove='';
           const randomNumber=Math.random();
          if(randomNumber>=0 && randomNumber<1/3){
            computerMove='rock';      //console.log('rock'); c
          } else if(randomNumber>1/3 && randomNumber<2/3){
            computerMove='paper';     //console.log('paper');
          }else{
            computerMove='scissors';  // console.log('scissors');
          }

      return computerMove;
    }