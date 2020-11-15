export class GlobalRule {
    static validateDecimal(txt) : boolean{
        let splitDeci = txt.split(".")
        if(splitDeci.length > 2){
            return false;
        }
        return true;
    }

  }