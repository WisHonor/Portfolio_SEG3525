import raw from './products.json'
import gantLaineEpaisse from '../../assets/gant-laine-epaisse.jpg'

// Images locales (fichiers fournis dans src/assets) qui remplacent l'URL
// distante du catalogue JSON pour certains produits.
const localImages = {
  10: gantLaineEpaisse, // Gants Laine Épaisse
}

const products = raw.map((p) =>
  localImages[p.id] ? { ...p, image: localImages[p.id] } : p
)

export default products
