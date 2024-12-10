export const capitalize =(src)=>{
    if(!src) return '';
    return src.charAt(0).toUpperCase()+src.slice(1);
};

export const reverseString=(str)=>{
    return str.split('').reverse().join('');
};

export const calculator={
    add:(a,b)=>a+b,
    subtract:(a,b)=>a-b,
    multiply:(a,b)=>a*b,
    divide:(a,b)=>{
        if(b===0){
            throw new Error('Cannot divide by zero');
        }
        return a/b;
    },
};

export const caesarCipher=(str,shift)=>{
    return str
        .split('')
        .map((char)=>{
            const code=char.charCodeAt(0);

            if(code>=97 && code <=122){
                return String.fromCharCode(((code-97+shift+26)%26)+97);
            }else if(code >=65 && code <=90){
                return String.fromCharCode(((code-65+shift+26)%26)+65);
            }

            return char
        })
        .join('');
};

export const analyzeArray=(arr)=>{
    const average=arr.reduce((acc,curr)=>acc+curr,0)/arr.length;
    const min=Math.min(...arr);
    const max= Math.max(...arr);
    const length=arr.length

    return{
        average,
        min,
        max,
        length
    }
}