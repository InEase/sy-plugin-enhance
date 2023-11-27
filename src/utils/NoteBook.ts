import { lsNotebooks } from '@/api';
import { ref } from 'vue';

let currentNoteBook = ref()
export function useCurrentNoteBook() {
  if (!currentNoteBook.value) {
    lsNotebooks().then((resp: IReslsNotebooks) => {
      const {
        notebooks = [],
      } = resp
      if (!notebooks.length) {
        return
      }

      const openedNotebookList = notebooks.filter(i => !i.closed)

      if (!openedNotebookList.length || openedNotebookList.length !== 1) {
        return
      }

      currentNoteBook.value = openedNotebookList[0];
    })
  }

  return currentNoteBook
}

export async function getCurrentOpenedNoteBook() {

}
