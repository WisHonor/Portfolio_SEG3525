const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateInfo({ name, email, address }) {
  const e = {}
  if (!name || !name.trim()) e.name = 'Le nom est requis.'
  if (!email || !email.trim()) e.email = 'Le courriel est requis.'
  else if (!EMAIL_RE.test(email)) e.email = 'Courriel invalide (ex. nom@exemple.ca).'
  if (!address || !address.trim()) e.address = "L'adresse est requise."
  return e
}

export function validatePayment({ card, expiry, cvv }) {
  const e = {}
  const digits = (card || '').replace(/\s/g, '')
  if (!/^\d{16}$/.test(digits)) e.card = 'Numéro de carte invalide (16 chiffres).'
  const m = /^(\d{2})\/(\d{2})$/.exec(expiry || '')
  if (!m || Number(m[1]) < 1 || Number(m[1]) > 12) e.expiry = "Date d'expiration invalide (MM/AA)."
  if (!/^\d{3}$/.test(cvv || '')) e.cvv = 'CVV invalide (3 chiffres).'
  return e
}
