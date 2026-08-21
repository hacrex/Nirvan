import React from 'react';

import { siteUrl } from '@/lib/site';

interface OrganizationJsonLdProps {
  type?: 'Organization';
}

export const OrganizationJsonLd: React.FC<OrganizationJsonLdProps> = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'NIRVAN',
    url: siteUrl,
    logo: `${siteUrl}/brand/nirvan-mark-512.png`,
    image: `${siteUrl}/brand/nirvan-social-landscape.png`,
    description: 'Digital rehabilitation and wellbeing companion for cardiac, stroke/neuro, kidney, and liver recovery.',
    slogan: 'Move Forward. Live Better.',
    audience: {
      '@type': 'Audience',
      audienceType: 'People in rehabilitation and recovery, patients, families, and care teams',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@reviarecovery.com',
    },
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
  category?: string;
}> = ({ title, description, url, datePublished, authorName, reviewerName, category }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    ...(category && { articleSection: category }),
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'NIRVAN',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/brand/nirvan-mark-512.png`,
      },
    },
    image: `${siteUrl}/brand/nirvan-social-landscape.png`,
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
