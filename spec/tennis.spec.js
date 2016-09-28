function tennispoint()
{
  this.playAGetscore = '';
  this.playBGetscore = '';
  this.echo = function()
  {
    var str = '';

   if(this.playAGetscore === 0)
    {
        str += 'Love-';
    }
    else if(this.playAGetscore === 15)
    {
        str += 'fifteen-';
    }
    if(this.playBGetscore === 0)
     {
         str += 'Love';
     }
    else if(this.playBGetscore === 15)
    {
          str += 'fifteen';
    }

      return str;
  };
}

  describe('Tennis game', function(){
	  it('should  be  "Love = Love" when starting the game',function()
	  {
       var point = new tennispoint();
	      point.playAGetscore = 0;
	      point.playBGetscore = 0;
	      expect(point.echo()).toEqual('Love-Love');
	  });
    it('should  be  "fifteen = Love" when A=15 and B=0',function()
    {
       var point = new tennispoint();
        point.playAGetscore = 15;
        point.playBGetscore = 0;
        expect(point.echo()).toEqual('fifteen-Love');
    });
    

});
