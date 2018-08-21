function BoardMember(name, address,  job){
  this.name = name;
  this.address = address; 
  this.job = job;
  return this;
}


polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")