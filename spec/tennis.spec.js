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
    if(this.playBGetscore === 0)
    {
         str += 'Love';
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

});
