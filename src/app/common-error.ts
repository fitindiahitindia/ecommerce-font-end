export class commonError{
    unxpectedError = "Unexpected error";
    serverError = "Server Not responding"  
    constructor(){}
  unxpected(){
    return this.unxpectedError;
  }
  server(){
    return this.serverError;
  }
}