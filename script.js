function toggleMode() {
  const html = document.documentElement
  
  // Uma maneira de fazer:

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // Outra maneira:
  html.classList.toggle("light")
}
