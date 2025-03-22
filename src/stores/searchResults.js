import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSearchResultsStore = defineStore('searchResults', () => {
  const searchResults = ref([]);
  const searchQuery = ref('');


  return { searchResults, searchQuery }
})
