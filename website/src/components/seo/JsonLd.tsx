import React from 'react';

interface OrganizationJsonLdProps {
  type?: 'Organization';
}

export const OrganizationJsonLd: React.FC<OrganizationJsonLdProps> = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'REVIA',
    url: 'https://reviarecovery.com',
    logo: 'https://reviarecovery.com/logo.png',
    description: 'Digital rehabilitation and wellbeing companion for cardiac, stroke/neuro, kidney, and liver recovery.',
    slogan: 'Move Forward. Live Better.',
    medicalSpecialty: [
      'Cardiovascular',
      'Neurologic',
      'Renal',
      'Gastroenterology',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQJsonLd: React.FC<{ faqs: { question: string; answer: string }[] }> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ArticleJsonLd: React.FC<{
  title: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
  reviewerName?: string;
}> = ({ title, description, url, datePublished, authorName, reviewerName }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    ...(reviewerName && {
      reviewedBy: {
        '@type': 'Person',
        name: reviewerName,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
