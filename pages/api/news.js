import Scraper from '@utils/Scraper'

function news(request, response) {
  if (request.method != 'POST') return response.status(400).send('Bad Request!')

  const scraper = new Scraper()

  return new Promise((resolve, reject) => {
    scraper.getData()
      .then((data) => {
        response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate')
        response.status(200).json(data)
        resolve()
      })
      .catch((error) => {
        console.log(error)
        response.status(500).send('Internal Server Error!')
        reject()
      })
  })
}

export default news