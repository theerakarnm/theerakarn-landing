import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: 'theerakarnm',
  meta: [
    {
      name: 'description',
      content: 'nice to meet you',
    },
  ],
};
