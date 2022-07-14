// a melonJS data manifest
// note : this is note a webpack manifest
const DataManifest = [
  { name: 'app', type: 'tmx', src: 'data/map/app.tmx' },
  /* Bitmap Text */
  {
    name: 'PressStart2P',
    type: 'image',
    src: 'data/fnt/PressStart2P.png'
  },
  {
    name: 'PressStart2P',
    type: 'binary',
    src: 'data/fnt/PressStart2P.fnt'
  },

  {
    name: 'dojos',
    type: 'image',
    src: 'data/img/map/dojos.png'
  },
  {
    name: 'gary',
    type: 'image',
    src: 'data/img/map/gary.png'
  },
  {
    name: 'macdonalds',
    type: 'image',
    src: 'data/img/map/macdonalds.png'
  },
  {
    name: 'tubes',
    type: 'image',
    src: 'data/img/map/tubes.png'
  },
  {
    name: 'gripe_run_right',
    type: 'image',
    src: 'data/img/sprite/gripe_run_right.png'
  }
]

export default DataManifest