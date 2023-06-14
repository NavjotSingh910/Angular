function getSearchProducts<T>(values:T[]):T{//array of t type and return single value that present in index of array
//  return 3; //Type 'number' is not assignable to type 'T'.  'T' could be instantiated with an arbitrary type which could be unrelated to 'number'.
 return values[3];
}

// arrow function
const getMoreProducts = <T>(values:T[]):T[]   =>  {
    return values
}