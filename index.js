function BoardMember(name, homeState,  training){
  this.name = name;
  this.homeState = homeState; 
  this.training = training;
  return this;
  
  this.veto = function(){
    return  "No, I must disagree";
  }
}


polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")