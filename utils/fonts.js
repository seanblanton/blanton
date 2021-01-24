const FontFaceObserver = require('fontfaceobserver')

const getFonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const raleway = new FontFaceObserver('Raleway')

  raleway.load()
}

export default getFonts