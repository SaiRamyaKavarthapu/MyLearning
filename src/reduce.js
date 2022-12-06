
const ReduceFunction = () => {
    const numbers = [175, 50, 25];
const data=numbers.reduce((total, num) => total-num);

  return (
      <div>
       {data}
      </div>
  )
}

export default  ReduceFunction;