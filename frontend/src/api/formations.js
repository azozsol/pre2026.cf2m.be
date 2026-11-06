import { apiGet } from './client';

/** Formations visibles sur le site (publiées ou en recrutement), en recrutement d'abord. */
export function listerFormations({ signal } = {}) {
    return apiGet('/formations', { signal });
}

/** Contenu complet de la page détail d'une formation ; erreur avec `statut` 404 si elle n'est pas visible. */
export function lireFormation(slug, { signal } = {}) {
    return apiGet(`/formations/${encodeURIComponent(slug)}`, { signal });
}
