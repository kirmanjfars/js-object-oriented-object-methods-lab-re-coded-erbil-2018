function BoardMember(name, homeState,  training){
  this.name = name;
  this.homeState = homeState; 
  this.training = training;
  return this;
}


polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")