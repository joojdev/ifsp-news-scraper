const superagent = require('superagent')
const { JSDOM } = require('jsdom')

function Scraper() {
  this.getData = () => {
    return new Promise((resolve, reject) => {
      superagent.get('https://scl.ifsp.edu.br/', (error, response) => {
        if (error) return reject('Error!')
        
        const { document } = new JSDOM(response.text).window
        
        // Get first post.
        // firstPostTitle = document.querySelector('div.manchete-texto-lateral:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1) > a:nth-child(1)').textContent.replace(new RegExp('\t', 'g'), '').replace(new RegExp('\n', 'g'), '')
        // firstPostLink = document.querySelector('div.manchete-texto-lateral:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1) > a:nth-child(1)').href
        // firstPostThumbnail = document.querySelector('img.img-rounded').src

        const firstPostTitle = document.querySelector('div.manchete-texto-lateral:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1) > a:nth-child(1)').textContent.replace(new RegExp('\t', 'g'), '').replace(new RegExp('\n', 'g'), '')
        const firstPostLink = document.querySelector('div.manchete-texto-lateral:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(1) > a:nth-child(1)').href
        const firstPostThumbnail = document.querySelector('img.img-rounded').src

        const firstPost = { title: firstPostTitle, link: firstPostLink, thumbnail: firstPostThumbnail }

        // Get other posts.
        // Array.from(document.querySelector('div.row-fluid:nth-child(4) > div:nth-child(2)').children).slice(0, -1).map((element) => {
        //   return {
        //     title: element.children[1].textContent.replace(new RegExp('\t', 'g'), '').replace(new RegExp('\n', 'g'), ''),
        //     link: element.children[0].href,
        //     thumbnail: element.children[0].children[0].src
        //   }
        // })

        const otherPosts = Array.from(document.querySelector('div.row-fluid:nth-child(4) > div:nth-child(2)').children).slice(0, -1).map((element) => {
          return {
            title: element.children[1].textContent.replace(new RegExp('\t', 'g'), '').replace(new RegExp('\n', 'g'), ''),
            link: element.children[0].href,
            thumbnail: element.children[0].children[0].src
          }
        })

        // Get last posts.
        // Array.from(document.querySelector('.tile-collection').children).map((element) => {
        //   const title = element.children[0].children[0].textContent.replace(new RegExp('\t', 'g'), '').replace(new RegExp('\n', 'g'), '')
        //   const link = element.children[0].children[0].href
        //   const date = element.children[1].textContent
        
        //   return { title, link, date }
        // })

        const lastPosts = Array.from(document.querySelector('.tile-collection').children).map((element) => {
          const title = element.children[0].children[0].textContent.replace(new RegExp('\t', 'g'), '').replace(new RegExp('\n', 'g'), '')
          const link = element.children[0].children[0].href
          const date = element.children[1].textContent
        
          return { title, link, date }
        })

        return resolve({ firstPost, otherPosts, lastPosts })
      })
    })
  }
}

export default Scraper