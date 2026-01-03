interface FaqItem {
  question: string;
  answer: string;
}

export function useFaqSchema(faqs: FaqItem[]) {
  const schema = computed(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }));

  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema.value),
      },
    ],
  });
}
