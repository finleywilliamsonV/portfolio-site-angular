import { Injectable } from '@angular/core'
import { Meta } from '@angular/platform-browser'

type Location = 'root' | 'about-me' | 'portfolio'

@Injectable({
  providedIn: 'root'
})
export class OpenGraphService {
  constructor(private meta: Meta) {}

  addMetaTags(location: Location) {
    // default tags
    this.meta.updateTag({ name: 'og:site_name', content: 'finleywill.com' })
    this.meta.updateTag({ name: 'og:url', content: 'finleywill.com' })
    this.meta.updateTag({ name: 'og:type', content: 'website' })
    this.meta.updateTag({
      name: 'og:image',
      content: 'http://finleywill.com/assets/images/open-graph-tag-image.png'
    })

    // location-specific tags
    if (location === 'root') {
      this.meta.updateTag({
        name: 'og:title',
        content: 'Finleys Portfolio Site'
      })
      this.meta.updateTag({
        name: 'og:description',
        content: 'Welcome to my portfolio site!'
      })
    } else if (location === 'about-me') {
      this.meta.updateTag({ name: 'og:title', content: 'About Me' })
      this.meta.updateTag({
        name: 'og:description',
        content: 'Learn a few things about me :)'
      })
    } else if (location === 'portfolio') {
      this.meta.updateTag({ name: 'og:title', content: 'Portfolio' })
      this.meta.updateTag({
        name: 'og:description',
        content: 'Check out some of my projects!'
      })
    }
  }
}
