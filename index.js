function produceDrivingRange(range) {
  return function(startingPoint, endingPoint) {
    start = parseInt(startingPoint)
    end = parseInt(endingPoint)
    if(start >= end) {
      if(range >= (start - end)){
        return `within range by ${range - (start - end)}`
      } else {
        return `${(range - (start - end)) * -1} blocks out of range`
      }
    } else {
      if(range >= (end - start)){
        return `within range by ${range - (end - start)}`
      } else {
        return `${(range - (end - start)) * -1} blocks out of range`
      }
    }
  }
}

function produceTipCalculator(tipAmount) {
  return function(amount) {
    return amount * tipAmount
  }
}
