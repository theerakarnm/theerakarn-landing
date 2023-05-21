import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer class=''>
      <div class='container'>
        <a
          href='https://www.builder.io/'
          target='_blank'
          class={styles.anchor}>
          <span>Made with ♡ by theerakarnm</span>
        </a>
      </div>
    </footer>
  );
});
