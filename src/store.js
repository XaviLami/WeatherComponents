
import {
    writable
  } from 'svelte/store';
  
  export const ville = writable('');
  export const locations = writable([]);
  export const weathers = writable('');