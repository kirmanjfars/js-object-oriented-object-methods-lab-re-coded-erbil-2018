function BoardMember(name, homeState,  training){
  this.name = name;
  this.homeState = homeState; 
  this.training = training;
  
   this.veto = function(){
    return  "No, I must disagree";
  }
  
  
   this.veto = function(){
    return  "No, I must disagree";
  }
  
  return this;
  
 
}


polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")