import { siteConfig } from '@/data/siteConfig';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.legalName,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Plus Code identifier backup
      description: siteConfig.address.plusCode,
    },
    url: siteConfig.domain,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}