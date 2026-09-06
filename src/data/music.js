// SoundCloud resources are the part of the API URL after https://api.soundcloud.com/
export const pieces = [
  {
    title: 'Atmos',
    resource: 'playlists/851104859',
    link: 'https://soundcloud.com/erik-irgens/atmos-i',
    description:
      'Two small movements, each intended to deliver atmospheric environments to be inhabited, experienced, and left. I created each movement with limited harmonic and melodic materials. Atmos - I uses a lydian collection that is expanded and observed. Atmos - II uses a modified ionian collection with a raised fourth and lowered seventh. Originally created for wild UP ensemble, Atmos received the William Averitt Prize for Compositional Excellence in 2018.',
  },
  {
    title: 'Nostos',
    resource: 'playlists/662399856',
    link: 'https://soundcloud.com/erik-irgens/sets/nostos-erik-irgens-recital',
    description:
      "As a child, I rarely grew roots wherever I lived, as I moved frequently from country to country. Nostos, which means 'homecoming' in Greek, is a commentary on how our concept of home changes with time, age, and perspective, sometimes for the worse. Nostos was my first large project, spanning six movements and around forty minutes of content, written for choir, string quartet, marimba, vibraphone, and hanging cymbals. The piece is programmatic, its text drawn from select passages of Homer's Iliad and Odyssey in the original Greek. 2018.",
  },
  {
    title: 'Dissidentem',
    resource: 'tracks/543724350',
    link: 'https://soundcloud.com/erik-irgens/dissidentem',
    description:
      "Dissidentem, Latin for 'separation', was written for piano trio. There are three distinct sections to this piece: an event, a consequence, and a recovery. I wrote it while contemplating and dealing with a recent loss, and how memories are indelibly changed with a hindsight perspective. 2017.",
  },
  {
    title: 'Somnolent',
    resource: 'tracks/543723972',
    link: 'https://soundcloud.com/erik-irgens/somnolent',
    description:
      'Somnolent has an interesting past. I started writing a piano piece from melodic materials I had scrapped long ago and stumbled upon in my files. While trying to make an acoustic piece out of them, they proved just as stubborn as before. Instead of scrapping them again, I digitally altered them with reverb, reversals, and other post-processing. After hours of manipulation I had my first uniquely digital work, whose contemplative atmosphere earned the title Somnolent.',
  },
  {
    title: 'Stars',
    resource: 'tracks/543724206',
    link: 'https://soundcloud.com/erik-irgens/stars',
    description:
      "Stars was written as a collaboration with Victoria Okafur, a colleague at Shenandoah University who majored in vocal performance. Perusing public-domain poetry, we stumbled upon Marjorie Pickthall's poem of the same name. To reflect her fundamentalist outlook I kept strictly to a more romantic soundscape, using common-third modulations and a large vocal range. 2017.",
  },
  {
    title: 'Gales',
    resource: 'tracks/146029326',
    link: 'https://soundcloud.com/erik-irgens/gales',
    description:
      'Gales was written in the fall of 2013 as I prepared to audition for the Composition major at Shenandoah University, where I was already studying Vocal Performance. Despite being one of my earlier works, I find that its aesthetic holds true to my voice. 2013.',
  },
]

export function embedUrl(resource) {
  const url = encodeURIComponent(`https://api.soundcloud.com/${resource}`)
  return `https://w.soundcloud.com/player/?url=${url}&color=%23ff4242&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
}
