// export function convertToMillions (number) {
//   const millions = number / 1000000;
//   return millions.toFixed(1);
// }

export function formatNumber(value, showSign = true) {
  if (value >= 1000000) {
    const result = (value / 1000000).toFixed(1)
    if (showSign) {
      return result + "M"
    }
    return result
  } else if (value >= 10000) {
    return (value / 1000).toFixed(1) + "K"
  } else {
    return value.toString()
  }
}

export function convertTimeStampToDate(timestamp) {
  const date = new Date(timestamp * 1000)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

export function convertToPercentage (number, showPercentageSign = true) {
  const percentage = (number * 100).toFixed(2)
  if (showPercentageSign) {
    return `${percentage}%`
  } else {
    return percentage 
  }
}

export function formatTimestamp (timestamp) {
  const date = new Date(timestamp * 1000)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear();
  return `${day}/${month}/${year}`
}

export function addDelimiter (number) {
  let result = ''
  let count = 0
  const numStr = number.toString()
  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result
    }
  }

  return result
}