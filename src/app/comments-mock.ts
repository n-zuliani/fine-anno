import { Comments } from './comments.model';
import { Utenti } from './utenti.model';

export const COMMENTI: Comments[] = [
  {
    "titolo": "Vendo macchina da cucire!",
    "user": new Utenti("Maria", "Palizzerri", "palimary", "mary.pali@gmail.com", "sdaysiudyh"),
    "comments": []
  },
  {
    "titolo": "hey gente hello world!",
    "user": new Utenti("Fabio", "Rossi", "frossi", "fabio.rossi@gmail.com", "123rossi1997"),
    "comments": [{
        "titolo": "ok buona a sapersi!",
        "user": new Utenti("Maria", "Palizzerri", "palimary", "mary.pali@gmail.com", "sdaysiudyh"),
        "comments": []
    }]
  }
];