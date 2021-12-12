//Recursive

const recursiveFun = (count) => {
  if (count <= 0) {
    console.log('All Done');
    return;
  }
  console.log(count);
  count--;
  recursiveFun(count);
};

console.log(recursiveFun(5));
