function tennis()
 {
     pointA = 0;
     pointB = 0;
 this.playAgetscore = function()
   {
       pointA += 1;
       return this.echo();
   }
 this.playBgetscore = function()
   {
       pointB += 1;
       return this.echo();
   }
 this.echo = function()
   {
         var scoreA = '';
         var scoreB = '';
         // A
      if(pointA === 0)
        {
           scoreA = 'Love';
        }
    else  if(pointA === 1)
        {
           scoreA = 'fifteen';
        }
    else  if(pointA === 2)
        {
           scoreA = 'thirty';
        }
    else  if(pointA === 3)
          {
             scoreA = 'forty';
          }
    else if(pointA === 4)
        {
           scoreA = 'A won the game';
           pointA = 0;
           return scoreA;
        }
      // B
      if(pointB === 0)
        {
           scoreB = 'Love';
        }
      else if(pointB === 1)
        {
           scoreB = 'fifteen';
        }
      else if(pointB === 2)
        {
           scoreB = 'thirty';
        }
      else if(pointB === 3)
          {
             scoreB = 'forty';
          }
      else if(pointB === 4)
      {
         scoreB = 'B won the game';
          pointB = 0;
         return scoreB;
      }
  return scoreA+'-'+scoreB;
  }
}

describe('Tennis game', function()
{
   var point = new tennis();
  it('should  be  "Love-Love" when starting the game',function()
  {
   expect(point.echo()).toEqual('Love-Love');
  });
  //caseA get point
  it('should  be  "fifteen-Love" when A=15 and B=0',function()
  {
   expect(point.playAgetscore()).toEqual('fifteen-Love');
  });
  it('should  be  "thirty-Love" when A=30 and B=0',function()
  {
   expect(point.playAgetscore()).toEqual('thirty-Love');
  });
  it('should  be  "forty-Love" when A=40 and B=0',function()
  {
   expect(point.playAgetscore()).toEqual('forty-Love');
  });
  it('should  be  "A won the game" when A win',function()
  {
   expect(point.playAgetscore()).toEqual('A won the game');
  });
  //caseB get point
  it('should  be  "Love-fifteen" when A=0 and B=15',function()
  {
   expect(point.playBgetscore()).toEqual('Love-fifteen');
  });
  it('should  be  "Love-thirty" when A=0 and B=30',function()
  {
   expect(point.playBgetscore()).toEqual('Love-thirty');
  });
  it('should  be  "Love-forty" when A=0 and B=40',function()
  {
   expect(point.playBgetscore()).toEqual('Love-forty');
  });
  it('should  be  "B won the game" when B win',function()
  {
   expect(point.playBgetscore()).toEqual('B won the game');
  });

  it('should  be  "fifteen-fifteen" when A and B equal 15',function()
  {
    point.playAgetscore();
    point.playBgetscore();
   expect(point.echo()).toEqual('fifteen-fifteen');
  });
  it('should  be  "thirty-fifteen" when A=30 and B=15',function()
  {
    point.playAgetscore();
   expect(point.echo()).toEqual('thirty-fifteen');
  });



});
