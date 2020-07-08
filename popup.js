function getString() {
  let f = fetch('https://zga.vercel.app/api')
  return f
    .then(res => {
      if (res.status !== 200) {
        console.log(`Looks like there was a problem. Status code: ${res.status}`)
        return
      }
      return res.json()
    })
    .then(data => {
      console.log(data.r)
      document.querySelector('#Output').innerHTML = data.r
    })
    .catch(err => console.log(`Fetch Error: ${err}`))
}
getString()
